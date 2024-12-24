<script setup lang="ts">

</script>

<template>
    <div class="domain__text">
        <img src="/images/icon.png" alt="" /><span>jeddlupoy</span>.com
    </div>
</template>

<style scoped>
img {
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
}
.domain__text {
    display: flex;
    position: fixed;
    font-size: 1rem;
    top: 0;
    padding: 2rem;
    padding-left: 0;
    align-items: center;
    z-index: 99;
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