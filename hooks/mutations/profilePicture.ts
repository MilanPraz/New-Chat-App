import { postRequest, putRequest } from "@/lib/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangePp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: any) => {
      return await putRequest({
        endpoint: "/api/changeimage",
        payload,
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });
};
