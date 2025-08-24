<!-- PixelButton.vue -->
<script setup lang="ts">
import { computed } from "vue";

type Variant = "default" | "success" | "fail";

interface Props {
    variant?: Variant;
    disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    variant: "default",
    disabled: false,
});

const variantMap: Record<Variant, Record<string, string>> = {
    default: {
        bg: "#F6C11A",
        text: "#0B3A78",
        border: "#0B3A78",
        outline: "#1E90FF"
    },
    success: {
        bg: "#4CAF50",
        text: "#ffffff",
        border: "#2E7D32",
        outline: "#62C46E"
    },
    fail: {
        bg: "#F44336",
        text: "#ffffff",
        border: "#B71C1C",
        outline: "#FF7A70"
    }
};

const styleVars = computed(() => {
    const v = variantMap[props.variant];

    return {
        "--btn-bg": v.bg,
        "--btn-text": v.text,
        "--btn-border": v.border,
        "--btn-outline": v.outline
    } as Record<string, string>;
});
</script>

<template>
    <button class="pixel-btn" :style="styleVars" :disabled="disabled" :class="{ 'is-disabled': disabled }">
        <slot />
    </button>
</template>

<style scoped>
.pixel-btn {
    font-family: "Pixelify Sans", sans-serif;
    font-optical-sizing: auto;

    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .5px;
    line-height: 1;
    font-size: 19px;

    /* boyut/padding: görsele yakın */
    padding: 3px 7px;

    /* ana yüzey */
    color: var(--btn-text);
    background: var(--btn-bg);

    /* “piksel” görünüm için keskin hatlar */
    border: none;
    position: relative;
    cursor: pointer;

    /* 1) dış açık mavi kontur  2) koyu mavi iç çerçeve  3) altta koyu gölge (pixel step) */
    box-shadow:
        0 0 0 6px var(--btn-outline),
        /* dış kontur */
        0 0 0 3px var(--btn-border),
        /* iç çerçeve */
        0 6px 0 0 var(--btn-border);
    /* alt basamak gölge */

    /* piksel köşe çıkıntıları */
    isolation: isolate;
}

/* Sol/sağ “basamak” çıkıntıları (görseldeki gibi) */
.pixel-btn::before,
.pixel-btn::after {
    content: "";
    position: absolute;
    height: 6px;
    width: 10px;
    background: var(--btn-outline);
    z-index: -1;
    top: calc(100% + 0px);
}

.pixel-btn::before {
    left: 8px;
}

.pixel-btn::after {
    right: 8px;
}

/* hover/active davranışı: çok hafif zıplama, gölge kısalır */
.pixel-btn:not(.is-disabled):hover {
    transform: translateY(-2px);
}

.pixel-btn:not(.is-disabled):active {
    transform: translateY(1px);
    box-shadow:
        0 0 0 6px var(--btn-outline),
        0 0 0 3px var(--btn-border),
        0 3px 0 0 var(--btn-border);
}

/* disabled */
.pixel-btn.is-disabled {
    filter: grayscale(.9) brightness(.95);
    cursor: default;
    box-shadow:
        0 0 0 6px color-mix(in srgb, var(--btn-outline) 60%, #888),
        0 0 0 3px color-mix(in srgb, var(--btn-border) 60%, #777),
        0 6px 0 0 color-mix(in srgb, var(--btn-border) 60%, #777);
}
</style>
