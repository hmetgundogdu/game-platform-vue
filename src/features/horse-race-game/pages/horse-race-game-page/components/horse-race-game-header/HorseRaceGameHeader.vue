<script setup lang="ts">

import HorseRaceGameHeaderTitle from './components/horse-race-game-header-title/HorseRaceGameHeaderTitle.vue'
import HorseRaceHameHeaderGameControlButtons from './components/horse-race-game-header-game-control-buttons/HorseRaceHameHeaderGameControlButtons.vue'

</script>

<template>
    <div class="flex justify-between items-center px-5 py-6 bg-amber-400">
        <div class="grow">
            <HorseRaceGameHeaderTitle />
        </div>
        <div>
            <HorseRaceHameHeaderGameControlButtons />
        </div>
    </div>
</template>



<style lang="css" scoped></style>