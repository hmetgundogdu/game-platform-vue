import type { MutationTree } from 'vuex'

import type { Horse, HorseRaceGameState, HorseRoundInfo, RoundResult, RoundSpec } from './types'
import { HorseRaceGameMutationTypes } from './mutation-types'


export type HorseRaceGameMutations<S = HorseRaceGameState> = {
    [HorseRaceGameMutationTypes.SET_HORSES](state: S, horses: Horse[]): void
    [HorseRaceGameMutationTypes.SET_ROUNDS](state: S, rounds: RoundSpec[]): void
    [HorseRaceGameMutationTypes.SET_STATUS](state: S, status: HorseRaceGameState['status']): void
    [HorseRaceGameMutationTypes.SET_CURRENT_ROUND](state: S, index: number): void
    [HorseRaceGameMutationTypes.PUSH_RESULT](state: S, index: RoundResult): void
    [HorseRaceGameMutationTypes.RESET_RESULTS](state: S): void
    [HorseRaceGameMutationTypes.UPDATE_CURRENT_ROUND](state: S, hourseStatus: HorseRoundInfo[]): void
}

export const horseRaceGameMutations: MutationTree<HorseRaceGameState> & HorseRaceGameMutations = {
    [HorseRaceGameMutationTypes.SET_HORSES](state, horses: Horse[]) {
        state.horses = horses.slice(0);
    },
    [HorseRaceGameMutationTypes.SET_ROUNDS](state, rounds: RoundSpec[]) {
        state.rounds = rounds;
    },
    [HorseRaceGameMutationTypes.SET_STATUS](state, status: HorseRaceGameState['status']) {
        state.status = status;
    },
    [HorseRaceGameMutationTypes.SET_CURRENT_ROUND](state, idx: number) {
        state.currentRoundIndex = idx;
    },
    [HorseRaceGameMutationTypes.PUSH_RESULT](state, rr: RoundResult) {
        state.results.push(rr);
    },
    [HorseRaceGameMutationTypes.RESET_RESULTS](state) {
        state.results = [];
    },
    [HorseRaceGameMutationTypes.UPDATE_CURRENT_ROUND](state, statuses) {
        state.rounds[state.currentRoundIndex].participants = statuses;
    },
}