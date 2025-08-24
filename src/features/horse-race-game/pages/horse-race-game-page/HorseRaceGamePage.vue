<script setup>
import HorseRaceGameHeader from './components/horse-race-game-header/HorseRaceGameHeader.vue';
import HorseRaceGameArea from './components/horse-race-game-area/HorseRaceGameArea.vue';
import '../../styles/game-font-definition.css';

</script>

<template>
    <div class="flex flex-col h-[1000px]">
        <div>
            <HorseRaceGameHeader />
        </div>
        <div class="grow">
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