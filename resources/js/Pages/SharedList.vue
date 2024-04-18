<script setup>
import TaskItem from "@/Components/TaskItem.vue";
import TaskInput from "@/Components/TaskInput.vue";
import { Head, Link } from "@inertiajs/vue3";
import { ResetIcon } from "@radix-icons/vue";
import { Button } from "@/shadcn/components/ui/button";

import { onMounted, reactive, ref, watchEffect } from "vue";
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

        <div>Reference: {{ list.id }}</div>

        <div class="">
            <TaskInput :list-id="list.id" @task-added="storeTask" />

            <div
                class="grid grid-cols-1 space-y-2"
                v-if="tasks && tasks.length > 0"
            >
                <TaskItem
                    v-for="task in tasks"
                    :key="task.id"
                    :task="task"
                    @task-updated="fetchTaskList(list.id)"
                />
            </div>
        </div>
    </div>
</template>
