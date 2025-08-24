<script setup lang="ts">

import GameFlatListItem from './components/game-flat-list-item/GameFlatListItem.vue'
import horseRaceGameCoverImage from '@/assets/games/horse-race-game/horse-game-cover-image.png'

</script>

<template>
    <div class="flat-list-container flex overflow-x-scroll py-24 gap-10">
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <router-link to="/games/horse-race-game">
            <GameFlatListItem selected :image="horseRaceGameCoverImage" />
        </router-link>
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
        <GameFlatListItem disabled :image="horseRaceGameCoverImage" />
    </div>
</template>

<style lang="css" scoped>
.flat-list-container {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.flat-list-container::-webkit-scrollbar {
    display: none;
}
</style>