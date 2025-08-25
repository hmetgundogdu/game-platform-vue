import { withPrefix } from "../../../app/store/namespacer";

export enum HorseRaceGameActionTypes {
    GENERATE = 'GENERATE',
    START = 'START',
    RUN_ROUND = 'RUN_ROUND',
    STOP = "STOP",
}

export const HorseRaceGameActionPx = withPrefix('horseRaceGame', HorseRaceGameActionTypes);
