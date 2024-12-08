<script setup>
    import Photo from '@/components/Photo.vue';
    import Social from '@/components/Social.vue';
    import Stats from '@/components/Stats.vue';
    import Button from '@/components/ui/button/Button.vue';
    import { DownloadIcon } from 'lucide-vue-next';
</script>

<template>
    <section class="h-full">
        <div class="container mx-auto h-full">
            <div class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <div class="text-center xl:text-left order-2 xl:order-none">
                    <span class="text-xl">Software Engineer</span>
                    <h1 class="h1 mb-6">
                        Hello I'm <br> <span class="text-accent">Erick Lalihatu</span>
                    </h1>
                    <p class="max-w-[500px] mb-9 text-white/80">
                        I excel at crafting Android app and I am proficient in various programming languages and technologies.
                    </p>
                    <div class="flex flex-col xl:flex-row items-center gap-8">
                        <Button variant="outline" size="lg" class="uppercase flex items-center gap-2">
                            <span>Download CV</span>
                            <DownloadIcon class="text-xl" />
                        </Button>
                        <div class="mb-8 xl:mb-0">
                            <Social container-styles="flex gap-8" icon-styles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                        </div>
                    </div>
                </div>
                <div class="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
        <Stats />
    </section>
</template>