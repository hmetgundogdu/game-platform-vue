import { createRouter, createWebHistory } from 'vue-router'
import horseRaceGameRouters from '@/features/horse-race-game/routers';
import appStartupRoutes from '@/features/app-startup/routes';

export default createRouter({
    history: createWebHistory(),
    routes: [
        ...appStartupRoutes,
        ...horseRaceGameRouters,
    ],
})