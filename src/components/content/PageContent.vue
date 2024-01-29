<script setup lang="ts">
import ScrollPrompt from '../graphics/ScrollPrompt.vue';

defineProps({
    text: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="page__container">
        <div class="page__heading">
            <h2>{{ text }}</h2>
            <ScrollPrompt/>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 5rem;
    font-weight: 500;
    line-height: 1.2;
}
.page__container {
    max-width: 900px;
    margin: 0 auto;
}
.page__heading {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
:slotted(h3) {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, rgb(219, 43, 57) 0%, rgb(173, 42, 159) 15%, rgb(142, 50, 255) 30%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
:slotted(h4) {
    font-size: 1.5rem;
    padding: 2.5rem 0;
}
:slotted(p), :slotted(span) {
    font-size: 1.1rem;
    padding-bottom: 1.7rem;
}
:slotted(span) {
    margin-right: 1rem;
}
:slotted(a) {
    text-decoration: none;
    font-weight: 500;
    color: #db2b39;
    transform: translateY(0px);
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
:slotted(a):hover {
    color: #ad2a9f;
    transform: translateY(10px);
    cursor: pointer;
}
:slotted(a):active {
    color: #8e32ff;
}
@media screen and (max-height: 700px) {
    h2 {
        font-size: 2.3rem;
    }
}
@media screen and (max-width: 700px) {
    h2 {
        font-size: 3rem;
    }
}
@media screen and (max-width: 400px) {
    h2 {
        font-size: 2.5rem;
    }
}
</style>