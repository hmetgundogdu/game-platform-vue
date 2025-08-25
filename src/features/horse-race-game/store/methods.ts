import type { RoundSpec, HorseRoundInfo, Horse } from "./types";

// TODO move feature constants
const RACE_VELOCITY = 5;
const MAX_POSITION_VALUE = 100;

export function simuleRound(round: RoundSpec) {
    const currentParticipants = round.participants;
    const isRoundNotFinish = currentParticipants.some((_) => _.position < MAX_POSITION_VALUE);

    const participants = round
        .participants
        .slice()
        .map((item) => ({ ...item } as HorseRoundInfo));

    const newPositions: Horse[] = [];
    const toSimuleParticipants = participants.filter((i) => i.position < MAX_POSITION_VALUE);

    for (const part of toSimuleParticipants) {
        const nextPosition = part.position + RACE_VELOCITY * (part.horse.condition * 0.01);

        if (nextPosition >= MAX_POSITION_VALUE) {
            part.running = false;
            part.position = MAX_POSITION_VALUE;

            newPositions.push(part.horse);
            continue;
        }

        part.running = true;
        part.position = nextPosition;
    }


    return { isRoundFinish: !isRoundNotFinish, participants, positions: newPositions };
}
