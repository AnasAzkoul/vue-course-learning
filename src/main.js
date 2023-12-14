import './assets/main.css'

import App from './App.vue'
import BaseButtonVue from './components/UI/BaseButton.vue';
import BaseCardVue from './components/UI/BaseCard.vue';
import BaseDialogVue from './components/UI/BaseDialog.vue';
import { createApp } from 'vue';

const app = createApp(App);

app.component('BaseCard', BaseCardVue);
app.component('BaseButton', BaseButtonVue);
app.component('BaseDialog', BaseDialogVue); 
app.mount('#app')
