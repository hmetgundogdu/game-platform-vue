<script setup lang="ts">
import { useStore } from '@/app/store';
import { computed } from 'vue';

import HorseRaceGameRaceLane from './components/horse-race-game-race-lane/HorseRaceGameRaceLane.vue';

const store = useStore();
const currentRound = computed(() => store.getters['horseRaceGame/currentRound']);
const currentRoundHorses = computed(() => store.getters['horseRaceGame/currentRound']?.participants);

</script>

<template>
    <div class="flex flex-col racecourse overflow-y-auto hrg-scroll h-full">
        <div class="racecourse-top"></div>
        <div class="race-lane-container w-full grow flex flex-col gap-1">
            <HorseRaceGameRaceLane v-for="(horseRoundInfo, index) in currentRoundHorses"
                :horse-position="horseRoundInfo.position" :horse-running="horseRoundInfo.running"
                :horse-color="horseRoundInfo.horse.color" :lane-number="index + 1"
                :horse-name="horseRoundInfo.horse.name" />
        </div>
        <div class="racecourse-buttom flex justify-center items-center gap-2 text-2xl">
            <div>{{ (currentRound?.index ?? 0) + 1 }}.st Lap</div>
            <div>{{ currentRound?.distance }}m</div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.race-section {
    width: 100%;
}

.racecourse {}

.racecourse-top {
    height: 402px;
    background: url(./assets/race-area-images/horse-race-game-area-top.png) repeat left top;
}

.race-lane-container {
    background: url(./assets/race-area-images/horse-race-game-area-road.png) repeat left top;
}

.racecourse-buttom {
    height: 88px;
    background: url(./assets/race-area-images/horse-race-game-area-bottom.png) repeat left top;
}
</style>