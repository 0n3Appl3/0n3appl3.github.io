import './assets/main.css'

import { createApp } from 'vue'
import VueSmoothScroll from 'v-smooth-scroll'
import App from './App.vue'
import PageFooter from './components/content/PageFooter.vue'

createApp(App).use(VueSmoothScroll, {
    duration: 1000,
    easingFunction: (t: number) => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
}).mount('#app')
createApp(PageFooter).mount('#footer')
