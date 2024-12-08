<script setup>
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/effect-fade';

    import { MoveUpRight } from 'lucide-vue-next';
    import { GitHubIcon } from 'vue3-simple-icons';
    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
    import WorkSliderBtns from '@/components/WorkSliderBtns.vue';

    const projects = [
        {
            num: "01",
            category: "frontend",
            title: "project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum sit unde labore accusantium possimus.",
            stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
            image:"/src/assets/thumb1.png",
            live:"",
            github:""
        },
        {
            num: "02",
            category: "fullstack",
            title: "project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nostrum sit unde labore accusantium possimus.",
            stack: [{name: "NextJs"}, {name: "TailwindCss"}, {name: "NodeJs"}],
            image:"/src/assets/thumb2.png",
            live:"",
            github:""
        }
    ]
    const project = ref(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        project.value = projects[currentIndex];
    }
</script>

<template>
    <section class="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div class="container mx-auto">
            <div class="flex flex-col xl:flex-row xl:gap-[30px]">
                <div class="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div class="flex flex-col gap-[30px] h-[50%]">
                        <div class="text-8xl leading-none font-extrabold text-transparent text-outline">{{ project.num }}</div>
                        <h2 class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{{ project.category }} project</h2>
                        <p class="text-white/60">{{ project.description }}</p>
                        <ul class="flex gap-4">
                            <li v-for="(item, index) in project.stack" :key="index" class="text-xl text-accent">
                                {{ item.name }}{{ index !== project.stack.length - 1 ? "," : "" }}
                            </li>
                        </ul>
                        <div class="border border-white/20"></div>
                        <div class="flex items-center gap-4">
                            <RouterLink :to="project.live">
                                <TooltipProvider :delay-duration="100">
                                    <Tooltip>
                                        <TooltipTrigger class="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <MoveUpRight size="30px" class="text-white group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </RouterLink>
                            <RouterLink :to="project.github">
                                <TooltipProvider :delay-duration="100">
                                    <Tooltip>
                                        <TooltipTrigger class="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <GitHubIcon size="30px" class="text-white group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="w-full xl:w-[50%]">
                    <Swiper
                        :space-between="30"
                        :slides-per-view="1"
                        class="xl:h-[520px] mb-12"
                        v-on:slide-change="handleSlideChange"
                    >
                        <SwiperSlide v-for="(item, index) in projects" :key="index" class="w-full swiper-slide">
                            <div class="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                <div class="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                <div class="relative w-full h-full">
                                    <img :src="project.image" alt="" class="w-full h-full object-cover">
                                </div>
                            </div>
                        </SwiperSlide>
                        <WorkSliderBtns container-styles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btn-styles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.swiper-slide {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s ease-in-out;
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}
</style>