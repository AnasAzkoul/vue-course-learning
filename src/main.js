import './assets/main.css'

import App from './App.vue'
import BaseButtonVue from './components/UI/BaseButton.vue';
import BaseCardVue from './components/UI/BaseCard.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.component('BaseCard', BaseCardVue);
app.component('BaseButton', BaseButtonVue); 

app.mount('#app')
