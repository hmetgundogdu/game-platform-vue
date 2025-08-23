<script setup lang="ts">
import { useStore } from 'vuex';
import AppLayout from '@/app/layouts/app-layout/AppLayout.vue'


const store = useStore();

console.log(store);
</script>

<template>
    <AppLayout>
        <router-view></router-view>
    </AppLayout>
</template>

<style scoped></style>
