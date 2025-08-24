<script setup>
import AppStartupPageTopbar from './components/startup-page-topbar/StartupPageTopbar.vue'
import AppStartupPageGamesFlatList from './components/startup-page-games-flat-list/AppStartupPageGamesFlatList.vue'

</script>

<template>
    <div class="startup-container">
        <div class=" px-[10%]">
            <AppStartupPageTopbar />
        </div>
        <div class="mt-1">
            <AppStartupPageGamesFlatList />
        </div>
        <div>
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