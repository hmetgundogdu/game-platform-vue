<script setup>
import AppStartupPageTopbar from './components/startup-page-topbar/StartupPageTopbar.vue'

</script>

<template>
    <div class="startup-container h-full">
        <div>
            <AppStartupPageTopbar />
        </div>
        <div>

        </div>
        <div></div>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.startup-container {
    @apply text-white;
    background: url('./assets/backgrounds/start-up-page-background.png') center/cover no-repeat;
}
</style>