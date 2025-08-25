<script setup lang="ts" generic="T extends any">

type ClassNames = {
    table?: string
    thead?: string
    tbody?: string
    row?: string
}

const props = defineProps<{
    items: T[]
    classNames?: ClassNames
}>()

</script>

<template>
    <table :class="['simple-table', classNames?.table]">
        <thead :class="['simple-table-thead', classNames?.thead]">
            <slot name="header" />
        </thead>
        <tbody :class="['simple-table-tbody', classNames?.tbody]">
            <template v-for="(item, i) in props.items" :key="i">
                <slot name="row" :item="item" :index="i" />
            </template>
        </tbody>
    </table>
</template>

<style></style>
