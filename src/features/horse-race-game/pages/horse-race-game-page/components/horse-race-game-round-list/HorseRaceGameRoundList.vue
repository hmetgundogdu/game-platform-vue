<script setup lang="ts">
import { useStore } from '@/app/store';
import {
    HorseRaceGameCard,
    HorseRaceGameCardBody,
    HorseRaceGameCardHeader,
} from '@/features/horse-race-game/components/HorseRaceGameCard';
import { SimpleDataTable } from '@/shared/components/simple-datatable';

import { ListBulletIcon, StarIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';
// Hooks
const store = useStore();
// Computed
const programs = computed(() => store.state.horseRaceGame.rounds);
const results = computed(() => store.state.horseRaceGame.results);

</script>

<template>
    <div class="flex w-full h-full">
        <div class="w-full">
            <HorseRaceGameCard class="h-[calc(100%-55px)]">
                <HorseRaceGameCardHeader class="h-[55px]">
                    <template #icon>
                        <ListBulletIcon class="size-7" />
                    </template>
                    Program
                </HorseRaceGameCardHeader>
                <HorseRaceGameCardBody class="h-full overflow-y-scroll hrg-scroll">
                    <template v-for="program in programs">
                        <HorseRaceGameCardHeader class="h-[10px] text-sm">
                            {{ program.index + 1 }}.st Lap {{ program.distance }}m
                        </HorseRaceGameCardHeader>
                        <SimpleDataTable :items="program.participants" class="w-full">
                            <template #header class="bg-amber-500 h-5">
                                <tr>
                                    <th>Position</th>
                                    <th>Name</th>
                                </tr>
                            </template>
                            <template #row="{ item, index }">
                                <tr class="h-9">
                                    <td class="font-medium">{{ index + 1 }}</td>
                                    <td class="font-medium">{{ item.horse.name }}</td>

                                </tr>
                            </template>
                        </SimpleDataTable>
                    </template>
                </HorseRaceGameCardBody>
            </HorseRaceGameCard>
        </div>
        <div class="w-full">
            <HorseRaceGameCard class="h-[calc(100%-55px)]">
                <HorseRaceGameCardHeader class="h-[55px]">
                    <template #icon>
                        <StarIcon class="size-7" />
                    </template>
                    Results
                </HorseRaceGameCardHeader>
                <HorseRaceGameCardBody class="h-full overflow-y-scroll hrg-scroll">
                    <template v-for="result in results">
                        <HorseRaceGameCardHeader class="h-[10px] text-sm">
                            {{ result.roundIndex + 1 }}.st Lap {{ programs[result.roundIndex].distance }}m
                        </HorseRaceGameCardHeader>
                        <SimpleDataTable :items="result.results" class="w-full">
                            <template #header class="bg-amber-500 h-5">
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                </tr>
                            </template>
                            <template #row="{ item }">
                                <tr class="h-9">
                                    <td class="font-medium">{{ item.rank + 1 }}</td>
                                    <td class="font-medium">{{ item.horse.name }}</td>
                                </tr>
                            </template>
                        </SimpleDataTable>
                    </template>
                </HorseRaceGameCardBody>
            </HorseRaceGameCard>
        </div>
    </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";

.simple-table {

    :deep(th),
    :deep(td) {
        @apply border-2 border-neutral-300 dark:border-neutral-700;
        @apply text-sm align-middle;
        @apply px-3 py-2;
    }
}
</style>