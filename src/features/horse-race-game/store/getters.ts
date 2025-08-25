import type { StoreState } from "@/app/store"
import type { GetterTree } from "vuex"
import type { RoundSpec, HorseRaceGameState } from "./types"

export const horseRaceGameGetters = {
    currentRound(state): RoundSpec | null {
        return state.currentRoundIndex >= 0 ? state.rounds[state.currentRoundIndex] : null
    },
    isReady: (s) => s.status === 'ready',
    isRunning: (s) => s.status === 'running',
    isFinished: (s) => s.status === 'finished',
    horses: (s) => s.horses,
} satisfies GetterTree<HorseRaceGameState, StoreState>