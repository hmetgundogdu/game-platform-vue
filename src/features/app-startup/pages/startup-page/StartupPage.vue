<script setup>
import StartupPageTopbar from './components/startup-page-topbar/StartupPageTopbar.vue'
import StartupPageGamesFlatList from './components/startup-page-games-flat-list/StartupPageGamesFlatList.vue'
import StartupPageSelectedGameHero from './components/startup-page-selected-game-hero/StartupPageSelectedGameHero.vue';

</script>

<template>
    <div class="startup-container">
        <div class=" px-[10%]">
            <StartupPageTopbar />
        </div>
        <div class="mt-1">
            <StartupPageGamesFlatList />
        </div>
        <div>
            <StartupPageSelectedGameHero />
        </div>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.startup-container {
    @apply text-white h-full flex flex-col;
    background: url('./assets/backgrounds/start-up-page-background.png') center/cover no-repeat;
}
</style>