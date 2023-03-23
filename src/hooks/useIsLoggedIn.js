import { useQuery } from "@tanstack/react-query";
import { isLoggedInApi } from "../apis/auth.apis";

export const useIsLoggedIn = () => {
  return useQuery(["isLoggedIn"], isLoggedInApi, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
    staleTime: 1000 * 60 * 60 * 24,

    select: (data) => {
      const isLoggedIn = !!data?.data?.data?.user?._id;
      const userData = data?.data?.data?.user || {};

      return { isLoggedIn, userData };
    },
  });
};
