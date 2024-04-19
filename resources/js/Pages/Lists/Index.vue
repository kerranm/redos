<script setup>
import Layout from "@/Components/Layout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { onMounted } from "vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    lists: {
        type: Array,
    },
});

onMounted(() => {});

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
    <Head title="Lists" />

    <Layout can-login="canLogin" can-register="canRegister">
        <template v-slot:header>
            <h1 class="text-xl font-semibold">My lists</h1>
        </template>

        {{ lists }}

        <div class="space-y-2">
            <ul>
                <li v-for="list in lists" :key="list.id">
                    <Link :href="route('lists.show', list.id)"
                        >{{ list.name }}
                    </Link>
                </li>
            </ul>
        </div>
    </Layout>
</template>
