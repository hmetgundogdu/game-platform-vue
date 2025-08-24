<script lang="ts" setup>
import {
    HorseRaceGameCard,
    HorseRaceGameCardBody,
    HorseRaceGameCardHeader,
} from '@/features/horse-race-game/components/HorseRaceGameCard';

import { ListBulletIcon } from '@heroicons/vue/24/solid';

</script>

<template>
    <HorseRaceGameCard>
        <HorseRaceGameCardHeader>
            <template #icon>
                <ListBulletIcon class="size-8" />
            </template>
            <div class="text-xl">

                Horse List ( 1 - 20 )
            </div>
        </HorseRaceGameCardHeader>
        <HorseRaceGameCardBody>asdasdasd</HorseRaceGameCardBody>
    </HorseRaceGameCard>
</template>

<style lang="css" scoped></style>