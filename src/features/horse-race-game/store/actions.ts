import type { AugmentedActionContext } from "@/app/store";
import { HorseRaceGameActionTypes } from "./action-types";
import type { ActionTree } from "vuex";
import type { RootStoreState } from "@/app/store/types";
import type { Horse, HorseRaceGameState, HorseRoundInfo, LaneResult, RoundResult, RoundSpec } from "./types";

import { HORSE_RACE_GAME_DISTANCES } from "./constants";
import { randomColors, sample } from "./utils";
import { HorseRaceGameMutationTypes } from "./mutation-types";

import { faker } from '@faker-js/faker';
import { sleep } from "@/shared/utils/async-utils";
import { simuleRound } from "./methods";


export interface HorseRaceGameActions {
    [HorseRaceGameActionTypes.GENERATE](
        { commit }: AugmentedActionContext
    ): void
    [HorseRaceGameActionTypes.START](
        { commit }: AugmentedActionContext,
        payload: undefined
    ): Promise<void>
    [HorseRaceGameActionTypes.STOP](
        { state }: AugmentedActionContext,
        payload: undefined
    ): Promise<RoundResult>
    [HorseRaceGameActionTypes.RUN_ROUND](
        { state }: AugmentedActionContext,
        payload: undefined
    ): Promise<RoundResult>
}

export const horseRaceGameActions: ActionTree<HorseRaceGameState, RootStoreState> = {
    [HorseRaceGameActionTypes.GENERATE]({ commit }) {
        const colors = randomColors(20)

        const horses: Horse[] = Array.from({ length: 20 }, (_, i) => ({
            id: i + 1,
            name: faker.person.firstName(),
            color: colors[i],
            condition: Math.floor(Math.random() * 100) + 1
        }));

        commit(HorseRaceGameMutationTypes.SET_HORSES, horses)

        const allIds = horses.map(h => h.id);
        const rounds: RoundSpec[] = HORSE_RACE_GAME_DISTANCES.map((d, idx) => ({
            index: idx,
            distance: d,
            participants: sample(allIds, 10)
                .map((id) => ({
                    position: 0,
                    running: false,
                    horse: horses.find((h) => h.id === id),
                } as HorseRoundInfo)),
        }));

        commit(HorseRaceGameMutationTypes.SET_ROUNDS, rounds);

        commit(HorseRaceGameMutationTypes.RESET_RESULTS);
        commit(HorseRaceGameMutationTypes.SET_CURRENT_ROUND, 0);
        commit(HorseRaceGameMutationTypes.SET_STATUS, 'idle');
    },
    [HorseRaceGameActionTypes.START]({ state, commit, dispatch }) {
        return new Promise(async () => {
            for (const round of state.rounds) {
                commit(HorseRaceGameMutationTypes.SET_STATUS, 'running');
                const result = await dispatch(HorseRaceGameActionTypes.RUN_ROUND, round);

                commit(HorseRaceGameMutationTypes.SET_STATUS, 'ready'); // animate maybe
                commit(HorseRaceGameMutationTypes.PUSH_RESULT, result);

                if (state.currentRoundIndex < state.rounds.length - 1) {
                    commit(HorseRaceGameMutationTypes.SET_CURRENT_ROUND, state.currentRoundIndex + 1);
                }

                await sleep(1000);
            }

            commit(HorseRaceGameMutationTypes.SET_STATUS, 'finished');
        })
    },
    [HorseRaceGameActionTypes.STOP]({ state, commit }) {
        const nextParticipants = state.rounds[state.currentRoundIndex].participants;

        nextParticipants.forEach((c) => c.running = false);

        if (state.status === 'running') { // TODO move to another action as STOP
            commit(HorseRaceGameMutationTypes.SET_STATUS, 'idle');
            commit(HorseRaceGameMutationTypes.UPDATE_CURRENT_ROUND, nextParticipants);
            return;
        }
    },
    [HorseRaceGameActionTypes.RUN_ROUND]({ state, commit }, round: RoundSpec) {
        return new Promise<RoundResult>(async (resolve) => {
            let rankPositions: Horse[] = [];

            do {
                const updateRound = state.rounds.find((_) => _.index == round.index)!;
                const { participants, isRoundFinish, positions } = simuleRound(updateRound);

                rankPositions = rankPositions.concat(positions);

                commit(HorseRaceGameMutationTypes.UPDATE_CURRENT_ROUND, participants);

                if (isRoundFinish) {
                    const results = rankPositions.map((horse, rank) => ({
                        rank: rank + 1,
                        horse,
                    } as LaneResult));

                    resolve({
                        roundIndex: round.index,
                        results,
                    });

                    break;
                }

                await sleep(50);

            } while (state.status == 'running');
        });
    }
}
