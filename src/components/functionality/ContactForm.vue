<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const subject = ref('')
const message = ref('')
const status = ref('')

const emailFormat: RegExp = new RegExp(/([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/)
const subjectLengthMin: number = 5
const messageLengthMin: number = 10

const attemptSubmit = (event: Event) => {
    status.value = ''
    if (emailFormat.test(email.value) === false) {
        event.preventDefault()
        status.value = 'Please enter your email address in the correct format. e.g. name@email.com'
        return
    }
    if (subject.value.length < subjectLengthMin) {
        event.preventDefault()
        status.value = 'Please enter a subject that is at least ' + subjectLengthMin + ' characters long.'
        return
    }
    if (message.value.length < messageLengthMin) {
        event.preventDefault()
        status.value = 'Please enter your message that is at least ' + messageLengthMin + ' characters long.'
        return
    }
}
</script>

<template>
    <form action="https://formspree.io/f/xleawjlo" method="POST">
        <label>
            <input v-model="email" type="email" name="_replyto" placeholder="Email" required>
        </label>
        <label>
            <input v-model="subject" type="text" name="subject" placeholder="Subject" required>
        </label>
        <label>
            <textarea v-model="message" name="message" placeholder="Message" required></textarea>
        </label>
        <p>{{ status }}</p>
        <button type="submit" class="submit" @click="attemptSubmit">Send Message</button>
    </form>
</template>

<style scoped>
form {
    padding-top: 1.5rem;
}
form input, form textarea {
    outline: none;
    border: none;
    color: var(--color-text);
    background-color: #292929;
    padding: 8px 15px;
    margin: 0.5rem 0;
    width: 100%;
}
form input {
    border-radius: 1.5rem;
}
form textarea {
    border-radius: 1rem;
}
form textarea {
    height: 140px;
    resize: none;
}
form button, button {
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.6rem 1.3rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    border-radius: 2rem;
    border: 2px solid var(--color-text);
    background-color: var(--color-text);
    color: var(--color-background);
    transition: all 0.15s ease-in-out;
}
form button:hover, button:hover {
    background-color: var(--color-background);
    color: var(--color-text);
    cursor: pointer;
}
p {
    color: #b31522;
    margin-bottom: 0.5rem;
}
</style>