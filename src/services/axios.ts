// --- Axios Import ---
import axios from "axios";
// --- Store Import ---
import authStore from "../store/modules/auth";

//NOTE - Axios Default Url
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

axios.interceptors.request.use(function (config) {
  if (config.url != "oauth/token") {
    config.headers["Authorization"] = `Bearer ${
      authStore?.getters && authStore.getters.token
    }`;
  }
  return config;
});

export default axios;
