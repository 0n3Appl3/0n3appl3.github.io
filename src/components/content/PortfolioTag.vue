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
    font-size: 0.8rem;
    background-color: #db2b3a27;
    color: #db2b39;
    border-radius: 2rem;
    padding: 0.5rem 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>