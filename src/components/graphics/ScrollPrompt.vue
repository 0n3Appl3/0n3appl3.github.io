<script setup lang="ts">
import { onMounted, ref } from 'vue'

const show = ref(true)
const secondsToShow = ref(2000)

onMounted(() => {
    setInterval(() => {
        show.value = !show.value;
    }, secondsToShow.value)
})
</script>

<template>
    <Transition name="prompt">
        <div v-if="show" class="prompt__container">
            <p>Scroll to learn more</p>
            <i class="bi bi-arrow-down"></i>
        </div>
    </Transition>
</template>

<style scoped>
.prompt__container {
    position: absolute;
    text-align: center;
    bottom: 2rem;
}
.prompt-enter-active, .prompt-leave-active  {
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.prompt-enter-from, .prompt-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>