// --- Vue 3 Import ---
import { createApp } from "vue";
// --- Main Component Import ---
import App from "./App.vue";
// --- Vuex Store Import ---
import store from "./store";
// --- Router Import ---
import router from "./router";
// --- HighCharts Import ---
import HighchartsVue from "highcharts-vue";
// --- PrimeVue Import ---
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-dark-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
// --- PrimeVue Components Import ---
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });

app.use(router);
app.use(store);
app.use(HighchartsVue);
app.use(ToastService);
app.mount("#app");
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Password", Password);
app.component("Toast", Toast);
