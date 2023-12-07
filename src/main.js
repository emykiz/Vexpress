// import './assets/main.css'
import '../src/index.css';
import '../src/components/LandingPage/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@../../../src/index.css'
// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')



