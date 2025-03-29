<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Orb = {
	borderRadius: string
	gradient: string
}

function orbBorders() {
	const numberOfOrbs: number = 30
	const orbs: Orb[] = []
	const corners: number = 4
	for (let i = 0; i < numberOfOrbs; i++) {
		let property: string = ""
		for (let j = 0; j < corners; j++) {
			const x: number = Math.floor((Math.random() * 2) + 1)
			property += (x == 1 ? "100" : "0") + "% "
		}
		orbs.push({
			borderRadius: property.trim(),
			gradient: `linear-gradient(${Math.random() * 360}deg, #12c2e9 0%, #c471ed 50%, #f64f59)`,
		})
	}
	return orbs
}

const orbs = ref(orbBorders())
let interval: number | undefined = undefined

onMounted(() => {
	interval = setInterval(() => {
		orbs.value = orbBorders()
	}, 3000)
})

onBeforeUnmount(() => {
	clearInterval(interval)
})
</script>

<template>
	<Transition name="orb-animate" appear>
		<div class="orb__grid">
			<div v-for="orb in orbs" :style="{ borderRadius: orb.borderRadius, background: orb.gradient }"></div>
		</div>
	</Transition>
</template>

<style scoped>
.orb__grid {
	display: grid;
	position: absolute;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
	grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
	height: 100vh;
	width: 50%;
	top: 0;
	right: 0;
	z-index: -1;
}
.orb__grid > div {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	background: rgb(219,43,57);
	transition: 1s all cubic-bezier(0.215, 0.610, 0.355, 1);
}
.orb-animate-enter-active, .orb-animate-leave-active  {
  transition: all 2s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.orb-animate-enter-from, .orb-animate-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
@media screen and (max-width: 1300px) {
	.portrait {
		right: 1%;
	}
	.orb__container {
		width: 750px;
	}
	.orb__container-two {
		width: 350px;
		height: 35%;
	}
}
</style>