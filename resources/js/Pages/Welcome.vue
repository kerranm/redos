<script setup>
import TaskItem from "@/Components/TaskItem.vue";
import TaskInput from "@/Components/TaskInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ResetIcon, Share1Icon } from "@radix-icons/vue";

import {
    Book,
    Bot,
    Code2,
    LifeBuoy,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
} from "lucide-vue-next";

import { Button } from "@/shadcn/components/ui/button";

import { onMounted, reactive, ref } from "vue";
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});

onMounted(() => {
    initializeTaskList();
});

const tasksList = reactive([]);
const list = ref({});

async function refreshList() {
    clearList();
    localStorage.removeItem("taskListId");
    await createTaskList();
}

async function initializeTaskList() {
    const taskListId = localStorage.getItem("taskListId");
    if (taskListId) {
        fetchTaskList(taskListId);
    } else {
        await createTaskList();
    }
}

function clearList() {
    tasksList.splice(0, tasksList.length);
}

async function fetchTaskList(id) {
    clearList();
    try {
        const response = await axios.get("/list/" + id);
        list.value = response.data;

        if (list.value.tasks) {
            tasksList.push(...list.value.tasks);
        }
    } catch (error) {
        console.log("creating a new one");
        await createTaskList();
    }
}

async function createTaskList() {
    const response = await axios.post("/lists");
    list.value = response.data;
    localStorage.setItem("taskListId", response.data.id);
}

function storeTask(task) {
    tasksList.push(task);
}

async function copyToClipboard() {
    if (window.isSecureContext && navigator.clipboard) {
        await navigator.clipboard.writeText(
            "https://abbio.com/share/" + list.value.id
        );
        alert("Copied");
    }
}

function handleImageError() {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
}
</script>

<template>
    <Head title="Welcome" />

    <div class="grid h-screen w-full pl-[53px]">
        <aside class="fixed left-0 z-20 flex flex-col h-full border-r inset-y">
            <div class="p-2 border-b">
                <Button variant="outline" size="icon" aria-label="Home">
                    <Triangle class="size-5 fill-foreground" />
                </Button>
            </div>
            <nav class="grid gap-1 p-2">
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-lg bg-muted"
                    aria-label="Playground"
                >
                    <SquareTerminal class="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="rounded-lg"
                    aria-label="Models"
                >
                    <Bot class="size-5" />
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
                    variant="ghost"
                    size="icon"
                    class="mt-auto rounded-lg"
                    aria-label="Help"
                >
                    <LifeBuoy class="size-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="mt-auto rounded-lg"
                    aria-label="Account"
                >
                    <SquareUser class="size-5" />
                </Button>
            </nav>
        </aside>
        <div class="flex flex-col">
            <header
                class="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4"
            >
                <h1 class="text-xl font-semibold">Reference: {{ list.id }}</h1>

                <Button
                    variant="outline"
                    size="sm"
                    class="ml-auto gap-1.5 text-sm"
                    @click.prevent="copyToClipboard"
                >
                    <Share class="size-3.5" />
                    Share
                </Button>
            </header>
            <main class="grid flex-1 gap-4 p-4 overflow-auto lg:grid-cols-1">
                <div class="relative flex-col gap-1 md:flex">
                    <TaskInput
                        :list-id="list.id"
                        @task-added="storeTask"
                        v-if="list && list.id"
                    />

                    <div class="space-y-2">
                        <TaskItem
                            v-for="task in tasksList"
                            :key="task.id"
                            :task="task"
                            @task-updated="fetchTaskList(list.id)"
                        />
                    </div>
                    <div class="flex justify-around p-2">
                        <Button variant="outline" @click.prevent="refreshList">
                            <ResetIcon />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <div class="container mx-auto">
        <nav v-if="canLogin" class="flex justify-end flex-1 -mx-3">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Dashboard
            </Link>

            <template v-else>
                <Link
                    :href="route('login')"
                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Log in
                </Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Register
                </Link>
            </template>
        </nav>
    </div>
</template>
