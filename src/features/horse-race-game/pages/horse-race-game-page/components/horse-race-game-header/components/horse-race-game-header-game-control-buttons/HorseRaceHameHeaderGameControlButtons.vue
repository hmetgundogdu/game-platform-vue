<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/app/store';

import HorseRaceGamePixelizeButton from '@/features/horse-race-game/components/HorseRaceGamePixelizeButton/HorseRaceGamePixelizeButton.vue';
import { HorseRaceGameActionPx } from '@/features/horse-race-game/store/action-types';

const store = useStore()
const status = computed(() => store.state.horseRaceGame.status);

const isActionStart = computed(() => status.value == 'ready' || status.value != 'running');
const canStart = computed(() => status.value != 'finished');
const canGenerate = computed(() => status.value == 'idle' || status.value == 'finished');

const handleGenerateButtonClick = () => {
    store.dispatch(HorseRaceGameActionPx.GENERATE);
}

const handleToggleButtonClick = async () => {
    if (isActionStart.value) {
        store.dispatch(HorseRaceGameActionPx.START);
        return;
    }

    store.dispatch(HorseRaceGameActionPx.STOP);
}

</script>

<template>
    <div class="flex items-center gap-5">
        <HorseRaceGamePixelizeButton variant="success" :disabled="!canGenerate" class="w-42"
            @click="handleGenerateButtonClick">
            Generate Game
        </HorseRaceGamePixelizeButton>
        <HorseRaceGamePixelizeButton class="w-42" :disabled="!canStart" :variant="isActionStart ? 'success' : 'fail'"
            @click="handleToggleButtonClick">
            {{ isActionStart ? "Start" : "Stop" }}
        </HorseRaceGamePixelizeButton>
    </div>
</template>


<style lang="scss" scoped></style>