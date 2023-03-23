import { API_CLIENT } from "./axios";

export const getProductsApi = async () => API_CLIENT.get("/products");
export const getSingleProductApi = async (id) =>
  API_CLIENT.get(`/products/${id}/single`);

export const updateProductApi = async ({ shopId, id, data }) =>
  API_CLIENT.put(`shop/${shopId}/products/${id}`, data);
