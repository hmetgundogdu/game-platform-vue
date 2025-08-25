<script setup lang="ts">
import HorseRaceGameRaceLane from './components/horse-race-game-race-lane/HorseRaceGameRaceLane.vue';


</script>

<template>
    <div class="flex flex-col racecourse overflow-y-auto hrg-scroll h-full">
        <div class="racecourse-top"></div>
        <div class="race-lane-container w-full grow flex flex-col gap-1">
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="ocean" :lane-number="1"
                horse-name="Şimşek" />
            <HorseRaceGameRaceLane :horse-position="20" horse-running horse-color="lightblue" :lane-number="2"
                horse-name="Kasırga" />
            <HorseRaceGameRaceLane :horse-position="10" horse-running horse-color="purple" :lane-number="3" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="gray" :lane-number="4" />
            <HorseRaceGameRaceLane :horse-position="60" horse-running horse-color="yellow" :lane-number="5" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="green" :lane-number="6" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="orange" :lane-number="7" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="darkred" :lane-number="8" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="pink" :lane-number="9" />
            <HorseRaceGameRaceLane :horse-position="0" horse-running horse-color="white" :lane-number="10" />
        </div>
        <div class="racecourse-buttom"></div>
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
    background: url(./assets/race-area-images/horse-race-game-area-top.png) repeat-x left top;
}

.race-lane-container {
    background: url(./assets/race-area-images/horse-race-game-area-road.png) repeat left top;
}

.racecourse-buttom {
    height: 88px;
    background: url(./assets/race-area-images/horse-race-game-area-bottom.png) repeat right top;
}
</style>