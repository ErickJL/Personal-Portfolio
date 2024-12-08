<template>
    <header class="py-8 xl:py-12 text-white">
        <div class="container mx-auto flex justify-between items-center">
            <RouterLink to="/">
                <h1 class="text-4xl font-semibold">Erick<span class="text-accent">.</span></h1>
            </RouterLink>
            <div class="hidden xl:flex items-start gap-8">
                <Nav />
                <RouterLink to="/">
                    <Button>Hire me</Button>
                </RouterLink>
            </div>
            <div class="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
</template>

<script setup>
    import MobileNav from './MobileNav.vue';
    import Nav from './Nav.vue';
    import Button from './ui/button/Button.vue';
</script>