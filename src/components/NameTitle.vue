<script setup lang="ts">
import { ref } from 'vue'
import ButtonLink from './functionality/ButtonLink.vue';

const buttons = ref([
    {
        text: 'About',
        anchor: '#about',
    },
    {
        text: 'Portfolio',
        anchor: '#portfolio',
    },
    {
        text: 'Contact',
        anchor: '#contact',
    },
])
</script>

<template>
    <div class="name-title__container">
        <div class="name-title__name">Hi, I'm Jedd.</div>
        <div class="name-title__title">Software Engineering Graduate</div>
        <div class="buttons__container">
            <ButtonLink :text="buttons[0].text" :anchor="buttons[0].anchor" />
            <ButtonLink :text="buttons[1].text" :anchor="buttons[1].anchor" />
            <ButtonLink :text="buttons[2].text" :anchor="buttons[2].anchor" />
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
@media screen and (max-width: 850px) {
    .name-title__title {
        font-size: 2.5rem;
    }
}
@media screen and (max-width: 700px) {
    .name-title__name {
        font-size: 4rem;
    }
    .name-title__title {
        font-size: 2rem;
    }
}
@media screen and (max-width: 500px) {
    .name-title__name {
        padding-bottom: 1rem;
        line-height: 4.5rem;
    }
}
</style>