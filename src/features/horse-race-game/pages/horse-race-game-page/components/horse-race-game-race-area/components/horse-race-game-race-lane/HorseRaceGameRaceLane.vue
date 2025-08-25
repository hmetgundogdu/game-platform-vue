<script setup lang="ts">
import { computed, ref } from 'vue';
import HorseRaceGameHorseFigure from '../horse-race-game-horse-figure/HorseRaceGameHorseFigure.vue';

interface Props {
    horseName?: string;
    laneNumber?: number;

    horseColor?: string;
    horsePosition: number;
    horseRunning?: boolean;
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

const horseAnimationDelay = computed(() => {
    const laneNumber = (props.laneNumber ?? -1);

    return Math.floor(Math.random() * (100 - laneNumber) + laneNumber) * 10;
});

</script>

<template>
    <div class="race-line w-full h-[50px] border-y-2 select-none" ref="containerRef">
        <div
            class="flex w-[46px] justify-center border-0 relative -rotate-90 mt-[9px] text-lg text-white font-bold bg-green-800">
            {{ props.laneNumber }}
        </div>
        <div class="horseFigure" ref="horseFigureRef" :class="{ 'animate-bounce': props.horseRunning }"
            :style="{ marginLeft: horsePositionAsPx, animationDelay: `${horseAnimationDelay}ms` }">
            <div v-if="props.horseName"
                class="flex justify-center items-center z-10 absolute w-16 -mt-4 ml-4 bg-amber-300 text-[10px] rounded-3xl px-1">
                {{
                    props.horseName }}</div>
            <HorseRaceGameHorseFigure :color="horseColor" />
        </div>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.race-line {
    border-right: solid 2px red;
}

.horseFigure {
    @apply w-20 -mt-[60px];
    transition: margin-left 0.2s ease;
}
</style>