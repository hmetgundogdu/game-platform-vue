import { createStore, Store as VuexStore, type ActionContext, type CommitOptions, type DispatchOptions } from 'vuex'
import horseRaceGame from '@/features/horse-race-game/store'
import type { RootStoreState } from './types'
import type { HorseRaceGameGetters } from '@/features/horse-race-game/store/types';
import type { Getters } from './getters';
import type { Mutations } from './mutations';
import type { Actions } from './actions';

const modules = {
    horseRaceGame,
};

type Modules = keyof typeof modules;
type ModulePrefix = `${Modules}/`;

export const store = createStore<RootStoreState>({
    modules,
})

export type PrefixKeys<T, P extends string> = {
    [K in keyof T & string as `${P}${K}`]: T[K];
};

export type RootGetters =
    PrefixKeys<HorseRaceGameGetters, 'user/'>;

export type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<RootStoreState, RootStoreState>, 'commit'>

export type Store = Omit<
    VuexStore<RootStoreState>,
    'getters' | 'commit' | 'dispatch'
> & {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: `${ModulePrefix}${K}`,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>
} & {
    dispatch<K extends keyof Actions>(
        key: `${ModulePrefix}${K}`,
        payload?: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>
} & {
    getters: {
        [K in keyof Getters & string as `${ModulePrefix}${K}`]: ReturnType<Getters[K]>
    }
}

export function useStore() {
    return store as Store
}

export type StoreState = RootStoreState;