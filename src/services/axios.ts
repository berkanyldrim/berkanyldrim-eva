// --- Axios Import ---
import axios from "axios";
// --- Store Import ---
import store from "../store/index";

//NOTE - Axios Default Url
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");
axios.interceptors.request.use(function (config) {
  if (config.url != "oauth/token" && token && token != null) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axios;
