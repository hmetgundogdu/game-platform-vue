import type { horseRaceGameGetters } from "./getters";

export type Horse = {
    id: number;
    name: string;
    color: string;
    condition: number;
}

export type HorseRoundInfo = {
    horse: Horse;
    position: number;
    running: boolean;
}

export type RoundSpec = {
    index: number;
    distance: number;
    participants: HorseRoundInfo[];
}

export type LaneResult = {
    rank: number;
    horse: Horse;
}

export type RoundResult = {
    roundIndex: number;
    results: LaneResult[];
}

export type HorseRaceGameState = {
    horses: Horse[];
    rounds: RoundSpec[];
    currentRoundIndex: number;
    status: 'idle' | 'ready' | 'running' | 'finished';
    results: RoundResult[];
}

export type HorseRaceGameGetters = {
    [K in keyof typeof horseRaceGameGetters]: ReturnType<typeof horseRaceGameGetters[K]>;
};