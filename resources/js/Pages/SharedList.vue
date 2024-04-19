<script setup>
import TaskItem from "@/Components/TaskItem.vue";
import TaskInput from "@/Components/TaskInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { Button } from "@/shadcn/components/ui/button";
import Layout from "@/Components/Layout.vue";
import { RefreshCcw, Share } from "lucide-vue-next";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    list: {
        type: Object,
    },
});

const tasks = reactive([]);

onMounted(() => {
    if (props.list && props.list.tasks.length > 0) {
        props.list.tasks.forEach((task) => {
            tasks.push(task);
        });
    }
});

async function copyToClipboard() {
    if (window.isSecureContext && navigator.clipboard) {
        await navigator.clipboard.writeText(
            "https://abbio.com/share/" + list.value.id
        );
        alert("Copied");
    }
}

async function fetchTaskList(id) {
    tasks.splice(0, tasks.length);
    try {
        const response = await axios.get("/list/" + id);

        if (response.data.tasks) {
            tasks.push(...response.data.tasks);
        }
    } catch (error) {
        console.log("creating a new one");
    }
}

function storeTask(task) {
    tasks.push(task);
}
</script>

<template>
    <Layout can-login="canLogin" can-register="canRegister">
        <Head title="Shared List" />

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

        <TaskInput :list-id="list.id" @task-added="storeTask" />

        <div class="space-y-2" v-if="tasks && tasks.length > 0">
            <TaskItem
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @task-updated="fetchTaskList(list.id)"
            />
        </div>
    </Layout>
</template>
