<script setup lang="ts">
import { ref } from 'vue'
import PortfolioTag from './PortfolioTag.vue';
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['response'])
const defaultProjectTitle = ref('Project Title')
const defaultProjectSummary = ref('Project Summary.')

const background = `linear-gradient(to bottom, #18181800 10%, #181818F8 70%), url(${props.project.thumbnail})`

const clickEvent = function() {
    emit('response', props.project)
}
</script>

<template>
    <div>
        <div class="preview__container" @click="clickEvent">
            <div class="preview__background">
                <div class="preview__content">
                    <p>
                        {{ project.title ?? defaultProjectTitle }}
                        <i class="bi bi-arrow-up-right"></i>
                    </p>
                    <p>{{ project.summary ?? defaultProjectSummary }}</p>
                    <div class="preview__tags">
                        <PortfolioTag v-for="tool in project.tools" :tag="tool" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
i {
    margin-left: 0.3rem;
    font-size: 0.9rem;
}
.preview__container {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-bottom: 1rem;
}
.preview__container > div {
    position: relative;
    overflow: hidden;
    height: 25rem;
    border-radius: 0.5rem;
}
.preview__background::before {
    content: '';
    position: absolute;
    background-size: 120%;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: v-bind(background);
    filter: grayscale(100%);
    transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.preview__content {
    position: absolute;
    bottom: 1rem;
    padding: 1.5rem;
}
.preview__content p:first-child {
    font-size: 1.8rem;
    font-weight: bold;
}
.preview__tags {
    padding-top: 1.2rem;
}
@media (hover: hover) and (pointer: fine) {
    .preview__container:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    .preview__background:hover::before {
        background-size: 150%;
        filter: grayscale(0%);
        cursor: pointer;
    }
}
@media screen and (max-width: 900px) {
    .preview__container > div {
        height: 25rem;
    }
}
@media screen and (max-width: 650px) {
    i {
        float: right;
    }
}
@media screen and (max-width: 500px) {
    .preview__container > div {
        background-size: 130%;
    }
}
</style>