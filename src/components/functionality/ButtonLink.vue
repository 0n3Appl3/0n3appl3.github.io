<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true,
    },
    anchor: {
        type: String,
        default: '#',
    }
})
</script>

<template>
    <a v-smooth-scroll :href="anchor">{{ text }}</a>
</template>

<style scoped>
a {
    display: inline-block;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    margin-right: 1rem;
    margin-bottom: 0.7rem;
    border-radius: 2rem;
    border: 2px solid var(--color-text);
    background-color: var(--color-text);
    color: var(--color-background);
    transition: all 0.15s ease-in-out;
}
a:hover {
    background-color: var(--color-background);
    color: var(--color-text);
}
@media screen and (max-width: 700px) {
    a {
        font-size: 0.8rem;
        padding: 0.6rem 1.2rem;
        margin-right: 0.7rem;
        margin-bottom: 0.4rem;
    }
}
</style>