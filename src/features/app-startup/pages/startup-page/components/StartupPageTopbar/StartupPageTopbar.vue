<script setup>
import AppSoftLine from '@/shared/components/app-soft-line/AppSoftLine.vue';
import AppMiniDigitalClock from '@/shared/components/app-mini-digital-clock/AppMiniDigitalClock.vue';

import {
    StarIcon,
    FaceSmileIcon,
    InformationCircleIcon,
} from '@heroicons/vue/24/solid'

</script>

<template>
    <div class="flex justify-around items-center">
        <div class="flex justify-around items-center">
            <div>
                <img class="w-30" src="@/assets/company/logos/insider-games-logo.png" />
            </div>
            <div>
                <InformationCircleIcon class="size-9" />
            </div>
        </div>
        <div class="flex justify-center items-center gap-5">
            <div class="flex">
                <FaceSmileIcon class="size-9 text-gray-600 bg-white rounded-sm" />
                <FaceSmileIcon class="size-9 text-gray-600 bg-white rounded-sm -ml-6 -mt-1" />
            </div>
            <div class="flex items-center gap-2">
                <FaceSmileIcon class="size-9 text-gray-600 bg-white rounded-sm" />
                <div class="font-extralight text-lg ">Ahmet Gündoğdu</div>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <div>
                <StarIcon class="size-9" />
            </div>
            <div>
                <AppMiniDigitalClock />
            </div>
        </div>
    </div>
    <div class="w-full pl-[5%] mt-[-10px]">
        <div class="w-8/12">
            <AppSoftLine />
        </div>
    </div>
</template>

<style lang="css" scoped></style>