// --- Axios Import ---
import axios from "../services/axios";
// --- Types Import ---
import { ILogin } from "../types/login";
// --- Store Import ---
import store from "../store/index";

export const login = async (values: ILogin) => {
  await axios
    .post("oauth/token", values)
    .then((response) => {
      if (response.status === 200) {
        const tokenData = {
          token: response.data.Data.AccessToken,
          refreshToken: response.data.Data.RefreshToken,
          email: values.Email,
        };
        localStorage.setItem("token", tokenData.token);
        store.dispatch("auth/login", tokenData);
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error; // Hatanın dışarıya fırlatılması
    });
};
