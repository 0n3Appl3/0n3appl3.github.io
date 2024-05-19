<script setup lang="ts">
defineProps({
    github: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
})

</script>

<template>
    <div class="domain__text">
        <span>jeddlupoy</span>.com
        <div class="domain__links">
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
        </div>
    </div>
</template>

<style scoped>
a {
    font-size: 1.3rem;
    margin-right: 0.5rem;
    color: var(--color-text);
    transition: all 0.15s ease-in-out;
}
a:hover {
    color: var(--color-hover-link);
}
.domain__text {
    position: fixed;
    font-size: 1rem;
    top: 0;
    padding: 2rem;
    padding-left: 0;
    z-index: 99;
}
.domain__text > span {
    font-weight: bold;
}
.domain__links {
    margin-top: 1rem;
}
@media screen and (max-width: 1300px) {
    .domain__text {
        position: absolute;
    }
}
@media screen and (max-width: 700px) {
    .domain__links {
        display: inline;
        margin-left: 1rem;
    }
}
</style>