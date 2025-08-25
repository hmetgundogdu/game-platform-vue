import { horseRaceGameGetters as horseRaceGame } from '@/features/horse-race-game/store/getters'

export type Getters =
    & typeof horseRaceGame;

export const horseRaceGameGetters = horseRaceGame;
