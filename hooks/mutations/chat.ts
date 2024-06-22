import { postRequest, putRequest } from "@/lib/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostAChat = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: any) => {
      return await postRequest({
        endpoint: "/api/message",
        payload,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      queryClient.invalidateQueries({ queryKey: ["friendsMessage"] });
    },
  });
};
