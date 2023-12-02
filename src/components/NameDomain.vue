<script setup lang="ts">
</script>

<template>
    <div class="domain__text">
        <span>jeddlupoy</span>.com
    </div>
</template>

<style scoped>
.domain__text {
    position: fixed;
    font-size: 1rem;
    top: 0;
    padding: 2rem;
    padding-left: 0;
    z-index: 99;
    /* background-color: var(--color-background); */
}
.domain__text > span {
    font-weight: bold;
}
@media screen and (max-width: 1300px) {
    .domain__text {
        position: absolute;
    }
}
</style>