//GET A USER'S CHAT WITH ANOTHER

import { getRequest } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetChat = ({ id, params }: { id: any; params: any }) => {
  return useQuery({
    queryKey: ["chats",id],
    queryFn: () => {
      return getRequest({
        endpoint: `/api/message/${id}`,
        params,
      });
    },
  });
};
