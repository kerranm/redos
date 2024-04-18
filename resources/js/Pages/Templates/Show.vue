<template>
    <div>
        <h1 class="text-7xl">Template</h1>
        <div>
            <div v-for="(key, section) in todos.todos" :key="key">
                {{ section }}
                <div
                    v-for="todo in key"
                    :key="todo"
                    @click.prevent="toggleTodo(todo)"
                >
                    <input type="checkbox" :checked="todo.completed" />
                    {{ todo.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    template: {
        type: Object,
    },
    todos: {
        type: Object,
    },
});

const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
};
</script>
