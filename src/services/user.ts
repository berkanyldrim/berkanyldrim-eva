// --- Axios Import ---
import axios from "../services/axios";
// --- Types Import ---
import { IUser } from "../types/user";
// --- Store Import ---
import store from "../store/index";

export const getUser = async (email:string) => {
  await axios
    .post("user/user-information",{email: email})
    .then((response) => {
      if (response.status === 200) {
        const userData: IUser = response.data.Data.user;
        store.dispatch("user/fetchUser", userData);
        return response;
      }
    })
    .catch((error) => {
      console.log(error);
      throw error; // Hatanın dışarıya fırlatılması
    });
};