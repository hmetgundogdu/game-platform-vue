<script setup lang="ts">
import horsePng from "../../../horse-race-game-race-area/assets/race-figure-images/horse-game-figure.png";

const props = withDefaults(defineProps<{ color?: string }>(), {
    color: "green",
});
</script>

<template>
    <div class="rider-figure" data-gait="gallop" :style="{
        '--coat': props.color,
    }">
        <img class="figure-img" :src="horsePng" alt="Horse Rider" />
        <span class="tint"></span>
    </div>
</template>

<style scoped>
.rider-figure {
    --mask: url(../../../horse-race-game-race-area/assets/race-figure-images/horse-game-figure-mask.png);

    position: relative;
    display: inline-block;
    isolation: isolate;

    line-height: 0;
}

.figure-img {
    display: block;
    width: 100%;
    height: auto;
    image-rendering: pixelated;
}

.tint {
    position: absolute;
    inset: 0;

    background: var(--coat, #ff69b4);
    mix-blend-mode: multiply;

    -webkit-mask-image: var(--mask);
    mask-image: var(--mask);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
}
</style>
