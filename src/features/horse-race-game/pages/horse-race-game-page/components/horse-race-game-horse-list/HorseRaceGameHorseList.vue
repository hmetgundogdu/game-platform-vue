<script lang="ts" setup>
import {
    HorseRaceGameCard,
    HorseRaceGameCardBody,
    HorseRaceGameCardHeader,
} from '@/features/horse-race-game/components/HorseRaceGameCard';

import { SimpleDataTable } from '@/shared/components/simple-datatable';

import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const rows = ref([
    { id: 1, horse: { name: "Şimşek" }, condition: 92, color: "#ff2bd8" },
    { id: 2, horse: { name: "Yıldırım" }, condition: 67, color: "#7c3aed" },
    { id: 4, horse: { name: "Kasırga" }, condition: 48, color: "#22d3ee" },
]);

</script>

<template>
    <HorseRaceGameCard class="h-full">
        <HorseRaceGameCardHeader>
            <template #icon>
                <ListBulletIcon class="size-8" />
            </template>
            <div class="text-xl">
                Horse List ( 1 - 20 )
            </div>
        </HorseRaceGameCardHeader>
        <HorseRaceGameCardBody>
            <SimpleDataTable :items="rows" class="w-full">
                <template #header class="bg-amber-500 h-5">
                    <tr>
                        <th>At İsmi</th>
                        <th>Durum</th>
                        <th>Renk</th>
                    </tr>
                </template>
                <template #row="{ item }">
                    <tr class="h-9">
                        <td class="font-medium">{{ item.horse.name }}</td>
                        <td>
                            <span class="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs" :class="[
                                item.condition >= 75
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-800'
                                    : item.condition >= 40
                                        ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800'
                                        : 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-200 dark:border-rose-800'
                            ]">
                                <span class="inline-block h-2 w-2 rounded-full" :class="[
                                    item.condition >= 75 ? 'bg-emerald-500' :
                                        item.condition >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                                ]" />
                                {{ item.condition }}
                            </span>
                        </td>
                        <td>
                            <span
                                class="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs text-neutral-700 dark:text-neutral-200"
                                :style="{ borderColor: item.color, color: item.color }">
                                <span class="inline-block size-3 rounded-sm" :style="{ backgroundColor: item.color }" />
                                {{ item.color }}
                            </span>
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