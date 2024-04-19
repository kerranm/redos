<template>
    <form @submit.prevent="addTask()" class="py-4">
        <div class="flex w-full items-center gap-1.5">
            <Input id="task" type="task" placeholder="+ task" v-model="task" />
            <Button type="submit"> + </Button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import axios from "axios";
import { ref } from "vue";

const emit = defineEmits(["task-added"]);

const task = ref("");

const props = defineProps({
    listId: {
        type: String,
        required: true,
    },
});

async function addTask() {
    if (task.value == "") return;

    try {
        const response = await axios.post("/lists/" + props.listId + "/task", {
            task: task.value,
        });

        task.value = "";
        // focus back in the input
        const input = document.getElementById("task");
        input.focus();

        emit("task-added", response.data);
    } catch (error) {
        console.log(error);
    }
}
</script>
