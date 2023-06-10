<script setup lang="ts">
import { ref } from 'vue'
import PortfolioTag from './PortfolioTag.vue';
defineProps({
    project: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['close'])

const openLink = (link: string) => {
    window.open(link, '_blank')
}
</script>

<template>
    <div class="modal" @click="emit('close')">
        <div class="modal__content" @click.prevent.stop>
            <div class="modal__header" v-bind:style="{ backgroundImage: 'url(' + project.thumbnail + ')'}">
                <span class="modal__close-button" @click="emit('close')">Close</span>
            </div>
            <div class="modal__body">
                <div>{{ project.title }}</div>
                <div class="modal__tags">
                    <PortfolioTag v-for="tool in project.tools" :tag="tool" />
                </div>
                <p>{{ project.description }}</p>
                <button @click="openLink(project.link)">View Project</button>
                <button @click="openLink(project.video)" v-if="project.video">Watch Demo</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.6rem 1.3rem;
    margin-top: 2rem;
    margin-right: 1rem;
    border-radius: 2rem;
    border: 2px solid var(--color-text);
    background-color: var(--color-text);
    color: var(--color-background);
    transition: all 0.15s ease-in-out;
}
button:hover {
    background-color: var(--color-background);
    color: var(--color-text);
    cursor: pointer;
}
.modal {
    position: fixed;
    z-index: 999;
    padding-top: 100px;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
}
.modal__content {
    background-color: var(--color-background);
    position: relative;
    margin: auto;
    padding: 0;
    border-radius: 1rem;
    max-width: 800px;
    overflow: hidden;
}
.modal__header {
    height: 100%;
    padding: 25px 25px 20rem 10rem;
}
.modal__body {
    padding: 25px;
}
.modal__body div:first-child {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
}
.modal__body p {
    padding-top: 1.5rem;
}
.modal__close-button {
    background-color: var(--color-background);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    color: #eee;
    float: right;
    font-size: 0.8rem;
    font-weight: bold;
}
.modal__close-button:hover {
    cursor: pointer;
}
.modal__tags {
    padding-top: 1.2rem;
}
@media screen and (max-width: 900px) {
    .modal__content {
        max-width: 100%;
        margin: 0 1.5rem;
    }
}
</style>