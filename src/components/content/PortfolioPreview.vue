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

const clickEvent = function() {
    emit('response', props.project)
}
</script>

<template>
    <div>
        <div class="preview__container" @click="clickEvent">
            <div v-bind:style="{ 
                backgroundImage: 'linear-gradient(to bottom, #18181800 10%, #181818F8 70%), url(' + project.thumbnail + ')'
                }">
                <div class="preview__content">
                    <p>
                        {{ project.title ?? defaultProjectTitle }}
                        <i class="bi bi-box-arrow-up-right"></i>
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
    margin-left: 0.7rem;
    font-size: 1.5rem;
}
.preview__container {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin-bottom: 1rem;
}
.preview__container:hover {
    transform: scale(1.05);
    cursor: pointer;
}
.preview__container > div {
    position: relative;
    height: 30rem;
    background-position: center;
    border-radius: 1rem;
    background-size: 120%;
    transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.preview__container:hover > div {
    background-size: 150%;
    cursor: pointer;
}
.preview__content {
    position: absolute;
    bottom: 1rem;
    padding: 1.5rem;
}
.preview__content p:first-child {
    font-size: 2rem;
    font-weight: bold;
}
.preview__tags {
    padding-top: 1.2rem;
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