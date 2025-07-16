import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'material-icons/iconfont/material-icons.css';

import router from './router'


const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.use(router)
app.mount('#app')
