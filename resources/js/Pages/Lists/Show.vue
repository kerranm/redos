<script setup>
import Layout from "@/Components/Layout.vue";
import TaskInput from "@/Components/TaskInput.vue";
import TaskItem from "@/Components/TaskItem.vue";
import { Button } from "@/shadcn/components/ui/button";
import { Head } from "@inertiajs/vue3";
import { RefreshCcw, Share } from "lucide-vue-next";
import { onMounted, reactive } from "vue";

const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    list: {
        type: Object,
        required: true,
    },
});

const tasksList = reactive([]);

onMounted(() => {
    props.list.tasks.forEach((task) => {
        tasksList.push(task);
    });
});

async function refreshList() {
    clearList();
    localStorage.removeItem("taskListId");
    await createTaskList();
}

function clearList() {
    tasksList.splice(0, tasksList.length);
}

async function fetchTaskList(id) {
    clearList();
    try {
        const response = await axios.get("/list/" + id);

        response.data.tasks.forEach((task) => {
            tasksList.push(task);
        });
    } catch (error) {
        console.log("creating a new one");
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
