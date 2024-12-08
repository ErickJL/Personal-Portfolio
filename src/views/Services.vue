<script setup>
    import { ArrowDownRightIcon } from 'lucide-vue-next';

    const services = [
        {
            num: '01',
            title: 'Android App Development',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi maxime deleniti, odio dolorum accusamus illum voluptatibus!',
            href: "/"
        },
        {
            num: '02',
            title: 'API Development',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi maxime deleniti, odio dolorum accusamus illum voluptatibus!',
            href: "/"
        },
        {
            num: '03',
            title: 'Fullstack Android App Development',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi maxime deleniti, odio dolorum accusamus illum voluptatibus!',
            href: "/"
        },
    ]
</script>

<template>
    <section class="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                <div v-for="(service, index) in services" :key="index" class="flex-1 flex flex-col justify-center gap-6 group">
                    <div class="w-full flex justify-between items-center">
                        <div class="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{{ service.num }}</div>
                        <RouterLink :to="service.href" class="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                            <ArrowDownRightIcon class="text-primary text-3xl" />
                        </RouterLink>
                    </div>
                    <h2 class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{{ service.title }}</h2>
                    <p class="text-white/60">{{ service.description }}</p>
                    <div class="border-b border-white/20 w-full"></div>
                </div>
            </div>
        </div>
    </section>
</template>

