import { createStore } from 'vuex'
import horseRaceGame from '@/features/horse-race-game/store'

export const store = createStore({
    modules: {
        horseRaceGame,
    },
})

export type RootState = ReturnType<typeof store.state>