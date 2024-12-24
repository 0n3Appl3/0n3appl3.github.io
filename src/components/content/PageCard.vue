<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="card__container">
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
.card__container {
    border: 1px solid var(--color-border);
    background-color: var(--color-background);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
}
:slotted(h4) {
    font-weight: bold;
    font-size: 1.3rem;
}
:slotted(h5) {
    font-size: 1rem;
    color: #f64f59;
}
:slotted(h6) {
    font-size: 1rem;
}
:slotted(hr) {
    border: 1px solid var(--color-border);
    margin: 1rem 0;
}
</style>