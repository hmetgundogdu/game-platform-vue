import type { Module } from 'vuex'
import type { HorseRaceGameState, } from './types'

import { horseRaceGameGetters as getters } from './getters';
import { horseRaceGameActions as actions } from './actions';
import { horseRaceGameMutations as mutations } from './mutations';

const state: HorseRaceGameState = {
    horses: [],
    rounds: [],
    currentRoundIndex: -1,
    status: 'idle',
    results: [],
};

const horseRaceGame: Module<HorseRaceGameState, any> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};


export default horseRaceGame