<script setup>
import router from '@/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = computed(() => useRoute())
</script>

<template>
    <nav class="flex gap-8">
        <RouterLink  v-for="(link, index) in router.options.routes" :key="index" :to="link.path"
        :class="['capitalize font-medium hover:text-accent transition-all', route.path === link.path ? 'text-accent border-b-2 border-accent' : '']">
            {{ link.name }}
        </RouterLink>
    </nav>
</template>