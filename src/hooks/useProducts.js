import { useQuery } from "@tanstack/react-query";
import { getProductsApi, getSingleProductApi } from "../apis/product.apis";

export const useGetProducts = () => {
  return useQuery(["products"], getProductsApi, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,

    select: (data) => {
      const products = data?.data?.data?.products || [];
      const totalCount = data?.data?.data?.totalCount || 0;

      return { products, totalCount };
    },
  });
};

export const useGetSingleProduct = (id) => {
  return useQuery(["getSingleProduct", id], () => getSingleProductApi(id), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,

    select: (data) => {
      const product = data?.data?.data?.product || {};

      return { product };
    },
  });
};
