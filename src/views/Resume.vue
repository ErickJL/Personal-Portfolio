<script setup>
    import { AndroidStudioIcon, FlutterIcon, DotNetIcon, FigmaIcon, GoIcon } from 'vue3-simple-icons';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
    import { ScrollArea } from '@/components/ui/scroll-area';
    import { ref } from 'vue';

    const about = {
        title: "About me",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam itaque aperiam odit quidem alias ratione asperiores",
        info: [
            {
                fieldName: "Name",
                fieldValue: "Erick Lalihatu"
            },
            {
                fieldName: "Experience",
                fieldValue: "3+ Years"
            },
            {
                fieldName: "Nationality",
                fieldValue: "Indonesia"
            },
            {
                fieldName: "Freelance",
                fieldValue: "Available"
            },
            {
                fieldName: "Language",
                fieldValue: "Indonesia, English"
            },
        ]
    }
    const experience = {
        icon: "",
        title: "My Experience",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam itaque aperiam odit quidem alias ratione asperiores",
        items: [
            {
                company: "Jatis Mobile",
                position: "Software Engineer",
                duration: "May 2023 - Present"
            },
            {
                company: "Suitemdia Digital Agency",
                position: "Software Engineer",
                duration: "Jul 2022 - Dec 2022"
            },
            {
                company: "PT Solusi Intek Indonesia",
                position: "Microcontoller Staff",
                duration: "Nov 2021 - May 2022"
            },
            {
                company: "Universitas Pertamina",
                position: "Computer Lab Assist",
                duration: "Aug 2020 - Dec 2020"
            },
        ]
    }
    const education = {
        icon: "",
        title: "My Education",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam itaque aperiam odit quidem alias ratione asperiores",
        items: [
            {
                institution: "Universitas Pertamina",
                degree: "Electrical Engineer",
                duration: "2019 - 2024"
            }
        ]
    }
    const skills = {
        title: "My Skills",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam itaque aperiam odit quidem alias ratione asperiores",
        skillList: [
            {
                icon: AndroidStudioIcon,
                name: "Android Studio"
            },
            {
                icon: DotNetIcon,
                name: ".NET"
            },
            {
                icon: GoIcon,
                name: "Golang"
            }
        ]
    }

    const activeTab = ref('experience');
</script>

<template>
    <div class="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div class="container mx-auto">
            <Tabs v-model="activeTab" default-value="experience" class="flex flex-col xl:flex-row gap-[60px]">
                <TabsList class="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                <div class="min-h-[70vh] w-full">
                    <Transition name="fade" mode="out-in">
                        <div :key="activeTab">
                            <TabsContent value="experience" class="w-full">
                                <div class="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 class="text-4xl font-bold">{{ experience.title }}</h3>
                                    <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">{{ experience.description }}</p>
                                    <ScrollArea class="h-[400px]">
                                        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            <li v-for="(item, index) in experience.items" :key="index" class="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span class="text-accent">{{ item.duration }}</span>
                                                <h3 class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{{ item.position }}</h3>
                                                <div class="flex items-center gap-3">
                                                    <span class="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p class="text-white/60">{{ item.company }}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                        </div>
                    </Transition>
                    <Transition name="fade" mode="out-in">
                        <div :key="activeTab">
                            <TabsContent value="education" class="w-full">
                                <div class="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 class="text-4xl font-bold">{{ education.title }}</h3>
                                    <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">{{ education.description }}</p>
                                    <ScrollArea class="h-[400px]">
                                        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            <li v-for="(item, index) in education.items" :key="index" class="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span class="text-accent">{{ item.duration }}</span>
                                                <h3 class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{{ item.degree }}</h3>
                                                <div class="flex items-center gap-3">
                                                    <span class="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p class="text-white/60">{{ item.institution }}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>
                        </div>
                    </Transition>
                    <Transition name="fade" mode="out-in">
                        <div :key="activeTab">
                            <TabsContent value="skills" class="w-full h-full">
                                <div class="flex flex-col gap-[30px]">
                                    <div class="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 class="text-4xl font-bold">{{ skills.title }}</h3>
                                        <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">{{ skills.description }}</p>
                                    </div>
                                    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        <li v-for="(skill, index) in skills.skillList" :key="index">
                                            <TooltipProvider :delay-duration=100>
                                                <Tooltip>
                                                    <TooltipTrigger class="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div class="group-hover:text-accent transition-all duration-300">
                                                            <component :is="skill.icon" size="60px" />
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p class="capitalize">{{ skill.name }}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Transition>
                    <Transition name="fade" mode="out-in">
                        <div :key="activeTab">
                            <TabsContent value="about" class="w-full text-center xl:text-left">
                                <div class="flex flex-col gap-[30px]">
                                    <h3 class="text-4xl font-bold">{{ about.title }}</h3>
                                    <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">{{ about.description }}</p>
                                    <ul class="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                        <li v-for="(item, index) in about.info" :key="index" class="flex items-center justify-center xl:justify-start gap-4">
                                            <span class="text-white/60">{{ item.fieldName }}</span>
                                            <span class="text-xl">{{ item.fieldValue }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </Transition>
                </div>
            </Tabs>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
