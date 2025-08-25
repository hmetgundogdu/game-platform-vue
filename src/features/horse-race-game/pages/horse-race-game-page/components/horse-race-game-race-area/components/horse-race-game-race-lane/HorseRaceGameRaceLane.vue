<script setup lang="ts">
import { computed, ref } from 'vue';
import HorseRaceGameHorseFigure from '../horse-race-game-horse-figure/HorseRaceGameHorseFigure.vue';

interface Props {
    horsePosition: number;
    horseRunning?: boolean;
    horseColor?: string;
    horseName?: string;
    laneNumber?: number;
}

const props = defineProps<Props>();
const containerRef = ref<HTMLDivElement | null>(null);
const horseFigureRef = ref<HTMLDivElement | null>(null);

const horsePositionAsPx = computed(() => {
    const { horsePosition: horsePositionPercent } = props;

    const laneWidth = containerRef.value?.clientWidth ?? 0;
    const horseWidth = horseFigureRef.value?.clientWidth ?? 0;

    const nextHorsePosition = ((laneWidth - horseWidth) / 100) * horsePositionPercent;

    return `${nextHorsePosition}px`;
})
</script>

<template>
    <div class="race-line w-full h-[50px] border-y-2" ref="containerRef">

        <div
            class="flex w-[46px] justify-center border-0 relative -rotate-90 mt-[9px] text-lg text-white font-bold bg-green-800">
            {{ props.laneNumber }}
        </div>
        <div ref="horseFigureRef" :class="{ 'animate-bounce': props.horseRunning }" class="w-20 -mt-[60px]"
            :style="{ marginLeft: horsePositionAsPx }">
            <div v-if="props.horseName" class="z-10 absolute -mt-4 ml-6 bg-amber-300 text-[10px] rounded-3xl px-1">{{
                props.horseName }}</div>
            <HorseRaceGameHorseFigure :color="horseColor" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>