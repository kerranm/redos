<script setup>
import TaskItem from "@/Components/TaskItem.vue";
import TaskInput from "@/Components/TaskInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { Button } from "@/shadcn/components/ui/button";
import Layout from "@/Components/Layout.vue";
import { RefreshCcw, Share } from "lucide-vue-next";
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

    <Layout can-login="canLogin" can-register="canRegister">
        <template v-slot:header>
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
        </template>

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
                <RefreshCcw size="14" class="text-gray-900" />
            </Button>
        </div>
    </Layout>
</template>
