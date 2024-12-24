<script setup lang="ts">

</script>

<template>
    <div class="page__container">
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
    display: inline-block;
    padding-top: 2rem;
    font-size: 2.5rem;
    font-weight: bold;
    background-image: linear-gradient(110deg, #12c2e9 0%, #c471ed 50%, #f64f59);
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