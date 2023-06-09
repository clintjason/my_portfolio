import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import Toast from "vue-toastification";

import "@/assets/css/animate.css";
import "@/assets/css/flexslider.css";
import "@/assets/fonts/icomoon/style.css";
import "@/assets/css/bootstrap.css";
import "@/assets/css/style.css";
import "@/assets/js/custom.js";
import "vue-toastification/dist/index.css";

createApp(App).use(Toast).mount('#app');