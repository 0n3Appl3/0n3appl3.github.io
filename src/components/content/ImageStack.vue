<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="image-stack__grid">
        <div class="image-stack__item image-stack__item--top">
        <img src="/images/image2-min.png" alt="">
        </div>
        <div class="image-stack__item image-stack__item--bottom">
        <img src="/images/image-min.png" alt="">
        </div>
    </div>
</template>

<style scoped>
img {
	width: 100%;
	display: block;
	border-radius: 0.5rem;
}
.image-stack__grid {
	display: grid;
	position: relative;
	grid-template-columns: repeat(12, 1fr);
}
.image-stack__item--top {
	grid-row: 1;
	grid-column: 1 / span 7;
	padding-top: 20%;
	z-index: 1;
}
.image-stack__item--bottom {
	grid-column: 4 / -1;
	grid-row: 1;
}
</style>