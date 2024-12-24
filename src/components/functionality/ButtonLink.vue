<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    anchor: {
        type: String,
        default: '#',
    },
    icon: {
        type: String,
        required: false,
        default: '',
    },
    openBlankPage: {
        type: Boolean,
        required: false,
        default: false,
    }
})
</script>

<template>
    <a v-if="openBlankPage" :href="anchor" target="_blank">
        {{ text }} 
        <i class="bi" :class="icon"></i>
    </a>
    <a v-else v-smooth-scroll :href="anchor">
        {{ text }} 
        <i class="bi" :class="icon"></i>
    </a>
</template>

<style scoped>
i {
    padding-left: 0.3rem;
}
a {
    display: inline-block;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.7rem 1.7rem;
    margin-right: 0.8rem;
    margin-bottom: 0.7rem;
    border-radius: 0.5rem;
    border: 2px solid var(--color-text);
    background-color: var(--color-text);
    color: var(--color-background);
    transition: all 0.1s ease-in-out;
}
a:active {
    scale: 0.9;
}
@media (hover: hover) and (pointer: fine) {
    a:hover {
        background-color: var(--color-background);
        color: var(--color-text);
    }
}
@media screen and (max-width: 1000px) {
    a {
        font-size: 0.95rem;
        padding: 0.6rem 1.2rem;
        margin-right: 0.7rem;
        margin-bottom: 0.4rem;
    }
}
</style>