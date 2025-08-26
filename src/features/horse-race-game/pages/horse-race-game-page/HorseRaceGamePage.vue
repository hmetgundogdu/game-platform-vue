<script setup>
import { useStore } from '@/app/store';
import { onBeforeMount, onMounted } from 'vue';
import { HorseRaceGameActionPx } from '../../store/action-types';

import HorseRaceGameHeader from './components/horse-race-game-header/HorseRaceGameHeader.vue';
import HorseRaceGameArea from './components/horse-race-game-area/HorseRaceGameArea.vue';

import '../../styles/game-font-definition.css';
import '../../styles/game-scroll-design.css';

const store = useStore();

onBeforeMount(() => {
    store.dispatch(HorseRaceGameActionPx.GENERATE);
})

</script>

<template>
    <div class="flex flex-col h-full">
        <div>
            <HorseRaceGameHeader />
        </div>
        <div class="grow  overflow-hidden">
            <HorseRaceGameArea />
        </div>
    </div>
</template>

<style lang="css" scoped>
* {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;
}
</style>