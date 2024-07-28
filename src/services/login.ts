// --- Axios Import ---
import axios from "axios";
// --- Types Import ---
import { ILogin } from "../types/login";
// --- Store Import ---
import authStore from "../store/modules/auth";

const login = (values: ILogin) => {
  axios.post("oauth/token", values);
};
