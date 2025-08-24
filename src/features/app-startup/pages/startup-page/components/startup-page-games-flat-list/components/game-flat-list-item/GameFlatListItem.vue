<script lang="ts" setup>
const { selected, disabled, image } = defineProps<{
    image: string;
    selected?: boolean;
    disabled?: boolean;
}>()

</script>

<template>
    <div class="game-card" :class="{ selected, disabled }">
        <img :src="image" class="w-full h-full" />
    </div>
</template>

<style lang="css" scoped>
.game-card {
    cursor: pointer;
    flex: 0 0 auto;

    width: 100px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #3da9fc;
    box-shadow: 0 0 10px #3da9fc, 0 0 2px #3da9fc;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card.disabled {
    cursor: none;
    pointer-events: none;
    filter: grayscale(100);
}

.game-card:hover {
    transform: scale(1.58);
    box-shadow: 0 0 20px #3da9fc, 0 0 20px #3da9fc;
}

.game-card.selected {
    transform: scale(1.58);
    box-shadow: 0 0 20px #3da9fc, 0 0 20px #3da9fc;
}

.game-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>