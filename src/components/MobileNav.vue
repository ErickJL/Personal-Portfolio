<script setup>
    import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
    import router from '@/router';
    import { useRoute } from 'vue-router';
    import { MenuIcon } from 'lucide-vue-next';
    import { computed } from 'vue';

    
    const route = computed(() => useRoute())
</script>

<template>
    <Sheet>
        <SheetTrigger class="flex justify-center items-center">
            <MenuIcon class="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent class="flex flex-col">
            <div class="mt-32 mb-40 text-center text-2xl">
                <RouterLink to="/">
                    <h1 class="text-4xl font-semibold">Erick<span class="text-accent">.</span></h1>
                </RouterLink>
            </div>
            <nav class="flex flex-col justify-center items-center gap-8">
                <RouterLink  v-for="(link, index) in router.options.routes" :key="index" :to="link.path"
                :class="['text-xl capitalize hover:text-accent transition-all', route.path === link.path ? 'text-accent border-b-2 border-accent' : '']">
                    {{ link.name }}
                </RouterLink>
            </nav>
        </SheetContent>
    </Sheet>
</template>