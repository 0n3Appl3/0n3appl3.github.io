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
    <div class="card__container" @click="clickEvent">
        <div>
            <div class="card__title">
                {{ project.title ?? defaultProjectTitle }}
                <i class="bi bi-box-arrow-up-right"></i>
            </div>
            <p>{{ project.summary ?? defaultProjectSummary }}</p>
            <div class="card__tags">
                <PortfolioTag v-for="tool in project.tools" :tag="tool" />
            </div>
        </div>
        <div class="card__thumbnail">
            <img :src="project.thumbnail" :alt="project.title" />
        </div>
    </div>
</template>

<style scoped>
i {
    margin-left: 0.7rem;
    font-size: 1.1rem;
}
.card__container {
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 1.5rem 0;
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.card__container:hover {
    transform: scale(1.1);
    cursor: pointer;
}
.card__container div:first-child {
    max-height: auto;
    margin-right: 1rem;
}
.card__container div:first-child .card__title {
    display: flex;
    align-items: center;
}
.card__title {
    font-size: 1.8rem;
    font-weight: 500;
}
.card__tags {
    padding-top: 1.2rem;
}
.card__thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    contain: size;
    border-radius: 1rem;
    overflow: hidden;
}
.card__thumbnail > img {
    max-width: 120%;
}
@media screen and (max-width: 1050px) {
    .card__container:hover {
        transform: scale(1.03);
    }
}
@media screen and (max-width: 650px) {
    i {
        position: absolute;
        right: 0.1rem;
    }
    .card__container {
        display: block;
    }
    .card__thumbnail {
        margin-top: 1rem;
        object-fit: fill;
        height: 200px;
    }
    .card__thumbnail > img {
        width: 100%;
    }
}
</style>