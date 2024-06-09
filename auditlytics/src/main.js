import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Toast from "vue-toastify";
import '@node_modules/vue-toastify/dist/index.css'


// import 'vue-toastify/dist/index.css';
// import "vue-toastify/dist/vue-toastify.css";

const app = createApp(App);
app.use(Toast);
app.mount('#app');