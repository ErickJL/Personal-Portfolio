<script setup>
    import { GitHubIcon, LinkedInIcon, MediumIcon, BloggerIcon } from 'vue3-simple-icons';

    const socials = [
        { icon: GitHubIcon, path: ""},
        { icon: LinkedInIcon, path: ""},
        { icon: MediumIcon, path: ""},
        { icon: BloggerIcon, path: ""},
    ];

    defineProps({
        containerStyles: String,
        iconStyles: String
    });
</script>

<template>
    <div :class="containerStyles">
        <RouterLink  v-for="(item, index) in socials" :key="index" :to="item.path"
        :class="iconStyles">
            <component :is="item.icon" size="14px" />
        </RouterLink>
    </div>
</template>