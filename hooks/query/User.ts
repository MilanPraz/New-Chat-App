import { getRequest } from "@/lib/fetch"
import { useQuery } from "@tanstack/react-query"

export const useGetUserDetail = (token: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getRequest({
        endpoint: "/api/singleuser",
        token,
      })
    },
  })
}
