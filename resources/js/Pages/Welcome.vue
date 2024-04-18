<script setup>
import TaskItem from "@/Components/TaskItem.vue";
import TaskInput from "@/Components/TaskInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ResetIcon, Share1Icon } from "@radix-icons/vue";
import { Button } from "@/shadcn/components/ui/button";

import { onMounted, reactive, ref } from "vue";
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
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
        console.log("existing");
        fetchTaskList(taskListId);
    } else {
        console.log("new");
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

        <div>
            Reference: {{ list.id }}
            <Button variant="link" size="sm" @click.prevent="copyToClipboard">
                <Share1Icon />
            </Button>
        </div>

        <div class="">
            <TaskInput :list-id="list.id" @task-added="storeTask" />

            <div class="grid grid-cols-1 space-y-2">
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
    </div>
</template>
