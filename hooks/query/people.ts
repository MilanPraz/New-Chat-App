import { getRequest } from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "../../providers/SessionProvider";

export const useGetAllPeople = () => {
  const {
    session: { token },
  } = useSession();
  return useQuery({
    queryKey: ["people"],
    queryFn: () => {
      return getRequest({
        endpoint: "/api/user",
        token: token,
      });
    },
  });
};
