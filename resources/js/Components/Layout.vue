<script setup lang="ts">
const props = defineProps({
    canLogin: {
        type: Boolean,
        required: true,
    },
    canRegister: {
        type: Boolean,
        required: true,
    },
});
import {
    Book,
    Code2,
    ListChecks,
    LogIn,
    Settings2,
    SquareCheck,
    SquareUser,
    Triangle,
} from "lucide-vue-next";

import { Button } from "@/shadcn/components/ui/button";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div class="grid h-screen w-full pl-[53px]">
        <aside class="fixed left-0 z-20 flex flex-col h-full border-r inset-y">
            <div class="p-2 border-b">
                <Button
                    as-child
                    variant="outline"
                    size="icon"
                    aria-label="Home"
                >
                    <Link :href="route('welcome')"
                        ><Triangle class="size-5 fill-foreground"
                    /></Link>
                </Button>
            </div>
            <nav class="grid gap-1 p-2">
                <Button
                    as-child
                    variant="ghost"
                    size="icon"
                    class="rounded-lg bg-muted"
                    aria-label="Playground"
                >
                    <Link :href="route('welcome')"
                        ><SquareCheck class="size-5"
                    /></Link>
                </Button>
                <Button
                    as-child
                    variant="ghost"
                    size="icon"
                    class="rounded-lg"
                    aria-label="Models"
                >
                    <Link :href="route('lists.index')"
                        ><ListChecks class="size-5"
                    /></Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-lg"
                    aria-label="API"
                >
                    <Code2 class="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-lg"
                    aria-label="Documentation"
                >
                    <Book class="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-lg"
                    aria-label="Settings"
                >
                    <Settings2 class="size-5" />
                </Button>
            </nav>
            <nav class="grid gap-1 p-2 mt-auto">
                <Button
                    as-child
                    :href="route('login')"
                    v-if="!$page.props.auth.user"
                    variant="ghost"
                    size="icon"
                    class="mt-auto rounded-lg"
                    aria-label="Login"
                >
                    <Link :href="route('login')"><LogIn class="size-5" /></Link>
                </Button>
                <Button
                    as-child
                    v-if="$page.props.auth.user"
                    variant="ghost"
                    size="icon"
                    class="mt-auto rounded-lg"
                    aria-label="Account"
                >
                    <Link :href="route('profile.edit')"
                        ><SquareUser class="size-5"
                    /></Link>
                </Button>
            </nav>
        </aside>
        <div class="flex flex-col">
            <header
                class="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4"
            >
                <slot name="header"></slot>
            </header>
            <main class="grid flex-1 gap-4 p-4 overflow-auto lg:grid-cols-1">
                <div class="relative flex-col gap-1 md:flex">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
