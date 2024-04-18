<template>
    <div
        class="flex items-center p-4 space-x-4 border rounded-md"
        :class="{
            'bg-green-50 border-green-200 text-green-500': task.completed_at,
        }"
    >
        <button @click="toggleTask()">
            <CheckIcon :class="{ 'text-green-500': task.completed_at }" />
        </button>
        <div class="flex-1 space-y-1">
            <p class="text-sm text-muted-foreground">
                <span :class="{ 'line-through': task.completed_at }">{{
                    task.description
                }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CheckIcon } from "@radix-icons/vue";

const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
});

const emits = defineEmits(["task-updated"]);

async function toggleTask() {
    try {
        const response = await axios.post(
            "/lists/" + props.task.task_list_id + "/task/" + props.task.id,
            {
                completed: props.task.completed_at != null ? 0 : 1,
            }
        );

        emits("task-updated");
    } catch (error) {
        console.log(error);
    }
}
</script>
