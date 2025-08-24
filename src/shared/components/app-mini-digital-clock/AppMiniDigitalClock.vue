<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';

const REFRESH_TIME_MS = 1000;

let interval: number | null = null;

const clockContent = ref('');

const updateClockContent = () => {
    const now = new Date();
    const nowClock = now.toLocaleTimeString();

    clockContent.value = nowClock;
}

onMounted(() => {
    updateClockContent();

    interval = setInterval(updateClockContent, REFRESH_TIME_MS);
});

onBeforeUnmount(() => {
    if (interval) {
        clearInterval(interval);
    }
})

</script>


<template>
    <div class="clock-container">
        {{ clockContent }}
    </div>
</template>

<style lang="css" scoped>
.clock-container {
    @reference "tailwindcss";

    @apply font-extralight text-lg;

    width: 6ch;
    text-align: right;
    display: inline-block;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
}
</style>