import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import WujieVue from "wujie-vue3";
import { router } from "./router";
const app = createApp(App);
app.use(router).use(WujieVue);
app.mount("#app");
