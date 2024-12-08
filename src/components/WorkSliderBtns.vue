<script setup>
    import { useSwiper } from 'swiper/vue';
    import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-vue-next';

    defineProps({
        containerStyles: String,
        btnStyles: String,
        iconStyles: String
    });
    
    const swiper = useSwiper()
</script>

<template>
    <div :class="containerStyles">
        <button :class="btnStyles" v-on:click="swiper.slidePrev">
            <ChevronLeftIcon :class="iconStyles"/>
        </button>
        <button :class="btnStyles" v-on:click="swiper.slideNext">
            <ChevronRightIcon :class="iconStyles"/>
        </button>
    </div>
</template>
