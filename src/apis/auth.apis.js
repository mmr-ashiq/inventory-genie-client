import { API_CLIENT } from "./axios";

export const isLoggedInApi = async () => API_CLIENT.get("/auth/is-logged-in");
export const loginApi = async (loginData) =>
  API_CLIENT.post("/auth/login", loginData);
export const logoutApi = async () => API_CLIENT.get("/auth/logout");
