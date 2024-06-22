import { getRequest } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPeople = (token: string) => {
  return useQuery({
    queryKey: ["people"],
    queryFn: () => {
      return getRequest({
        endpoint: "/api/user",
        token,
      });
    },
  });
};
