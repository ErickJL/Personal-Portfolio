<script setup> 
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

    import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-vue-next';

    const info = [
        {
            icon: PhoneIcon,
            title: "Phone",
            description: "+62 813 1180 8776"
        },
        {
            icon: MailIcon,
            title: "Email",
            description: "ericklalihatu1201@gmail.com"
        },
        {
            icon: MapPinIcon,
            title: "Address",
            description: "Jakarta, Indonesia"
        },
    ]
</script>

<template>
    <section class="py-6">
        <div class="container mx-auto">
            <div class="flex flex-col xl:flex-row gap-[30px]">
                <div class="xl:w-[54%] order-2 xl:order-none">
                    <form action="" class="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 class="text-4xl text-accent">Let's work together</h3>
                        <p class="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. At a rem inventore, pariatur dicta perspiciatis.</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="firstname" />
                            <Input type="lastname" placeholder="lastname" />
                            <Input type="email" placeholder="email" />
                            <Input type="phone" placeholder="phone number" />
                        </div>
                        <Select>
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="anddev">Android App Development</SelectItem>
                                    <SelectItem value="apidev">API Development</SelectItem>
                                    <SelectItem value="anddes">Android App Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea class="h-[200px]" placeholder="type your message here." />
                        <Button class="max-w-40" size="md">Send Message</Button>
                    </form>
                </div>
                <div class="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul class="flex flex-col gap-10">
                        <li v-for="(item, index) in info" :key="index" class="flex items-center gap-6">
                            <div class="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <component :is="item.icon" size="42px" />
                            </div>
                            <div class="flex-1">
                                <p class="text-white/60">{{ item.title }}</p>
                                <h3 class="text-xl">{{ item.description }}</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>