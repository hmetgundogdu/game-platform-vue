<script lang="ts" setup>
import { useStore } from '@/app/store';
import {
    HorseRaceGameCard,
    HorseRaceGameCardBody,
    HorseRaceGameCardHeader,
} from '@/features/horse-race-game/components/HorseRaceGameCard';

import { SimpleDataTable } from '@/shared/components/simple-datatable';

import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { computed } from 'vue';

const store = useStore();
const allHorses = computed(() => store.getters['horseRaceGame/horses']);

</script>

<template>
    <HorseRaceGameCard class="h-[calc(100%-55px)]">
        <HorseRaceGameCardHeader class="h-[55px]">
            <template #icon>
                <ListBulletIcon class="size-8" />
            </template>
            <div class="text-xl">
                Horse List ( 1 - {{ allHorses.length }} )
            </div>
        </HorseRaceGameCardHeader>
        <HorseRaceGameCardBody class="h-full overflow-y-scroll hrg-scroll">
            <SimpleDataTable :items="allHorses" class="w-full">
                <template #header class="bg-amber-500 h-5">
                    <tr>
                        <th>At İsmi</th>
                        <th>Durum</th>
                        <th>Renk</th>
                    </tr>
                </template>
                <template #row="{ item }">
                    <tr class="h-9">
                        <td class="font-medium">{{ item.name }}</td>
                        <td>
                            <span
                                class="flex justify-center items-center gap-2 rounded-full border px-2.5 py-1 text-md text-white"
                                :class="[
                                    item.condition >= 75
                                        ? 'bg-emerald-50  border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800'
                                        : item.condition >= 40
                                            ? 'bg-amber-50  border-amber-200 dark:bg-amber-900/30 dark:border-amber-800'
                                            : 'bg-rose-50  border-rose-200 dark:bg-rose-900/30 dark:border-rose-800'
                                ]">
                                <span class="inline-block h-2 w-2 rounded-full" :class="[
                                    item.condition >= 75 ? 'bg-emerald-500' :
                                        item.condition >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                                ]" />
                                {{ item.condition }}
                            </span>
                        </td>
                        <td>
                            <div class="flex justify-center items-center">
                                <span class="flex rounded-md px-2 py-1 text-xs text-neutral-700 dark:text-neutral-200"
                                    :style="{ color: item.color }">
                                    <span class="inline-block size-5 rounded-sm"
                                        :style="{ backgroundColor: item.color }" />
                                </span>
                            </div>
                        </td>
                    </tr>
                </template>
            </SimpleDataTable>
        </HorseRaceGameCardBody>
    </HorseRaceGameCard>
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