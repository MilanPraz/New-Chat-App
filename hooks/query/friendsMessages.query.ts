import { getRequest } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetAllFriendsMessage = (id: string) => {
  return useQuery({
    queryKey: ["friendsMessage"],
    queryFn: () => {
      return getRequest({
        endpoint: `/api/chat/${id}`,
      });
    },
  });
};
