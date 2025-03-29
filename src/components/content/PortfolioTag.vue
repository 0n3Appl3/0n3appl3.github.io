<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    tag: {
        type: String,
        required: true,
    },
})

const defaultTag = ref('Default Tag')
</script>

<template>
    <span>{{ tag ?? defaultTag }}</span>
</template>

<style scoped>
span {
    display: inline-block;
    font-size: 0.75rem;
    background-color: #f64f5927;
    color: #f64f59;
    border-radius: 2rem;
    padding: 0.3rem 0.7rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>