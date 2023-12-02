<script setup lang="ts">
</script>

<template>
    <div class="orb__container"></div>
    <div class="orb__container-two"></div>
</template>

<style scoped>
.orb__container, .orb__container-two {
    position: absolute;
    background: rgb(219,43,57);
	background: linear-gradient(54deg, rgba(219,43,57,1) 0%, rgba(173,42,159,1) 61%, rgba(142,50,255,1) 100%);
    z-index: -1;
}
.orb__container {
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 33% 67% 72% 28% / 74% 26% 74% 26%;
	width: 1050px;
	height: 100%;
}
.orb__container-two {
	top: 5%;
	right: 35%;
	border-radius: 17% 83% 48% 52% / 45% 37% 63% 55% ;
	width: 500px;
	height: 50%;
}
</style>