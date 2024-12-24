<script setup lang="ts">
import { ref } from 'vue'
import ButtonLink from './functionality/ButtonLink.vue';

const buttons = ref([
    {
        text: 'Download CV',
        anchor: 'https://drive.google.com/file/d/13O7eu72i14nX9s6bZxFjulzn9ZJJiCpg/view?usp=sharing',
    },
    {
        text: 'Browse Projects',
        anchor: '#projects',
    },
])
</script>

<template>
    <div class="name-title__container">
        <div class="name-title__name">Hi, I'm Jedd.</div>
        <div class="name-title__title">Software Engineer</div>
        <div class="buttons__container">
            <ButtonLink :text="buttons[0].text" :anchor="buttons[0].anchor" icon="bi-download" open-blank-page />
            <ButtonLink :text="buttons[1].text" :anchor="buttons[1].anchor" icon="bi-arrow-right" />
        </div>
    </div>
</template>

<style scoped>
.name-title__container {
    width: 100%;
}
.name-title__name {
    font-size: 6rem;
    font-weight: bold;
    padding-bottom: 0rem;
}
.name-title__title {
    font-size: 3rem;
}
.buttons__container {
    padding-top: 5rem;
}
@media screen and (max-width: 1400px) {
    .name-title__title {
        font-size: 2.5rem;
    }
}
@media screen and (max-width: 1000px) {
    .name-title__name {
        font-size: 4rem;
    }
    .name-title__title {
        font-size: 2rem;
    }
}
@media screen and (max-width: 700px) {
    .buttons__container {
        display: flex;
        flex-direction: column;
        text-align: center;
        position: absolute;
        bottom: 1rem;
    }
    .name-title__name {
        font-size: 3.5rem;
    }
    .name-title__title {
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 500px) {
    .name-title__name {
        padding-bottom: 1rem;
        line-height: 4.5rem;
    }
}
</style>