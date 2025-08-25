<script setup lang="ts">
import HorseRaceGameHorseList from '../horse-race-game-horse-list/HorseRaceGameHorseList.vue'
import HorceRaceGameRaceArea from '../horse-race-game-race-area/HorceRaceGameRaceArea.vue';
import HorseRaceGameRoundList from '../horse-race-game-round-list/HorseRaceGameRoundList.vue';
</script>

<template>
    <div class="flex h-full">
        <div class="w-86">
            <HorseRaceGameHorseList />
        </div>
        <div class="grow">
            <HorceRaceGameRaceArea />
        </div>
        <div class="w-96">
            <HorseRaceGameRoundList />
        </div>
    </div>
</template>


<style lang="css" scoped></style>