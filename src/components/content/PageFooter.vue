<script setup lang="ts">
import { ref } from 'vue';

const year: number = new Date().getFullYear()

const github = ref('https://github.com/0n3Appl3')
const linkedin = ref('https://www.linkedin.com/in/jeddlupoy/')
const email = ref('mailto:jedd.lupoy@gmail.com')
</script>

<template>
    <div class="footer__container">
        <div class="footer__links">
            <span>
                <a :href="github" target="_blank">
                    <i class="bi bi-github"></i>
                </a>
            </span>
            <span>
                <a :href="linkedin" target="_blank">
                    <i class="bi bi-linkedin"></i>
                </a>
            </span>
            <span>
                <a :href="email" target="_blank">
                    <i class="bi bi-envelope-fill"></i>
                </a>
            </span>
        </div>
        <p>&copy; {{ year }} Jedd Lupoy</p>
    </div>
</template>

<style scoped>
p {
    font-size: 0.85rem;
}
a {
    font-size: 1.3rem;
    margin-right: 0.5rem;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.15s ease-in-out;
}
a:hover {
    color: var(--color-hover-link);
}
.footer__container {
    width: 100%;
    padding: 1rem;
    margin-top: 5rem;
    text-align: center;
    background: linear-gradient(110deg, #12c2e9 0%, #c471ed 50%, #f64f59);
}
.footer__links {
    font-size: 1.3rem;
}
.footer__links > span {
    margin: 0.3rem;
}
</style>