<script setup>
</script>

<template>
    <div class="statup-page-selected-game-hero">
        <div class="hero-overlay"></div>
        <div class="hero-image"></div>
        <h1 class="hero-text">Horse Race Game</h1>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.statup-page-selected-game-hero {
    @apply relative flex grow items-center justify-center text-center text-white;
    height: 100vh;
    overflow: hidden;
    box-shadow: 0 -40px 60px -20px rgba(0, 0, 0, 0.8) inset;
}

.hero-image {
    position: absolute;
    inset: 0;
    background: url("@/assets/games/horse-race-game/horse-game-cover-image.png") center/cover no-repeat;
    filter: blur(6px) brightness(0.6);
    transform: scale(1.1);
    z-index: 0;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    /* genel karartma */
    z-index: 1;
}

.hero-top-fade {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
    z-index: 2;
}

.hero-text {
    @apply left-5 top-2;

    position: absolute;
    z-index: 3;

    font-size: 3rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
}
</style>
