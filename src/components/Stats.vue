<script setup>
    import CountUp from 'vue-countup-v3'

    const stats = [
        {
            num: 3,
            text: "Years of experience"
        },
        {
            num: 0,
            text: "Projects completed"
        },
        {
            num: 3,
            text: "Technologies mastered"
        },
        {
            num: 500,
            text: "Codes commit"
        },
    ]
</script>

<template>
    <section class="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div class="container mx-auto">
            <div class="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                <div v-for="(stat, index) in stats" :key="index" class="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                    <CountUp :end-val="stat.num" duration="5" delay="2" class="text-4xl xl:text-6xl font-extrabold" />
                    <p :class="['leading-snug text-white/80', stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]']">{{ stat.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>