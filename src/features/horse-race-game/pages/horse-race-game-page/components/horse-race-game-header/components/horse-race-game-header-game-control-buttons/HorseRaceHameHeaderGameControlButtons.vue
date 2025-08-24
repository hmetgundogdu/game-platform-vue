<script setup lang="ts">
import HorseRaceGamePixelizeButton from '@/features/horse-race-game/components/HorseRaceGamePixelizeButton/HorseRaceGamePixelizeButton.vue';


</script>

<template>
    <div class="flex items-center gap-5">
        <HorseRaceGamePixelizeButton variant="success" disabled>
            Generate Game
        </HorseRaceGamePixelizeButton>
        <HorseRaceGamePixelizeButton variant="fail">
            Stop
        </HorseRaceGamePixelizeButton>
    </div>
</template>


<style lang="scss" scoped></style>