<script setup>
import HorseRaceGameHeader from './components/horse-race-game-header/HorseRaceGameHeader.vue';
import HorseRaceGameArea from './components/horse-race-game-area/HorseRaceGameArea.vue';
import '../../styles/game-font-definition.css';

</script>

<template class="flex flex-col w-full">
    <div>
        <HorseRaceGameHeader />
    </div>
    <div>
        <HorseRaceGameArea />
    </div>
</template>



<style lang="scss" scoped></style>