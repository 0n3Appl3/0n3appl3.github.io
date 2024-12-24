<script setup lang="ts">
</script>

<template>
	<Transition name="orb-animate" appear>
		<div class="orb__container"></div>
	</Transition>
	<Transition name="orb-animate-two" appear>
		<div class="orb__container-two"></div>
	</Transition>
	<Transition name="portrait-fade" appear>
		<img class="portrait" src="/images/myself-race-suit-wesmo.png" alt="Me wearing a race suit"/>
	</Transition>
</template>

<style scoped>
.portrait {
	position: absolute;
	height: 90%;
	bottom: 0;
	right: 8%;
	filter: grayscale(80%) drop-shadow(0.5rem 0.5rem 0.75rem #00000063);
	z-index: -1;
}
.orb__container, .orb__container-two {
    position: absolute;
    background: rgb(219,43,57);
	background: linear-gradient(110deg, #12c2e9 0%, #c471ed 50%, #f64f59);
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
	border-radius: 17% 83% 48% 52% / 45% 37% 63% 55%;
	width: 500px;
	height: 50%;
}
.orb-animate-enter-active, .orb-animate-leave-active  {
  transition: all 2.5s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.orb-animate-enter-from, .orb-animate-leave-to {
  transform: translate(-80px, -140px);
  border-radius: 17% 83% 48% 52% / 45% 37% 63% 55%;
}
.orb-animate-two-enter-active, .orb-animate-two-leave-active  {
  transition: all 3.5s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.orb-animate-two-enter-from, .orb-animate-two-leave-to {
  transform: translate(80px, 140px);
  border-radius: 33% 67% 72% 28% / 74% 26% 74% 26%;
}
.portrait-fade-enter-active, .portrait-fade-leave-active  {
  transition: all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.portrait-fade-enter-from, .portrait-fade-leave-to {
  opacity: 0;
  transform: translateY(40px);
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
@media screen and (max-width: 1000px) {
	.portrait {
		right: -15%;
	}
}
@media screen and (max-width: 700px) {
	.portrait {
		right: 0%;
		height: 60%;
	}
	.orb__container {
		top: 35%;
		width: 450px;
		height: 65%;
	}
	.orb__container-two {
		width: 300px;
		height: 30%;
		top: 40%;
		right: 40%;
	}
}
</style>