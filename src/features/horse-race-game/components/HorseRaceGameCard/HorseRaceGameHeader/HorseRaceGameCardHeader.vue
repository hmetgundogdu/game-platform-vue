<script lang="ts" setup>
</script>

<template>
    <div class="flex justify-start items-center p-3 gap-3 bg-amber-300">
        <div v-if="$slots.icon">
            <slot name="icon" />
        </div>
        <div class="grow">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>