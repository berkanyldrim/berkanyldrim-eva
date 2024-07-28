// --- Yup Imports ---
import * as yup from "yup";
// --- Interfaces  Import---
import { ILogin } from "../types/login";

//NOTE - Schema
export const schema = yup.object({
  Email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required."),
  Password: yup.string().required("Password is required."),
});
export const defaultLoginValues: ILogin = {
  Email: "homework@eva.guru",
  Password: "Homeworkeva1**",
  GrantType: "password",
  Scope: "amazon_data",
  ClientId: "C0001",
  ClientSecret: "SECRET0001",
  RedirectUri: "https://api.eva.guru",
};
