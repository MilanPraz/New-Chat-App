import { postRequest } from "@/lib/fetch"
import { useMutation } from "@tanstack/react-query"
import { TLoginSchema } from "../../schema/auth.schema"

//Regsiter mutation
export const useRegisterMutation = () => {
  const router = "/auth/signin"
  return useMutation({
    mutationFn: async (payload: any) => {
      await postRequest({
        endpoint: "/api/user/register",
        payload,
      })
    },
  })
}

//Login mutation
export const useLoginRegister = () => {
  return useMutation({
    mutationFn: async (payload: TLoginSchema) => {
      return await postRequest({
        endpoint: "/api/user/login",
        payload,
      })
    },
  })
}

export const useGoogleAuth = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      return await postRequest({
        endpoint: `/api/user/google`,
        payload,
      })
    },
  })
}

// Register mutations
// export const useRegAgentMutation = (token: string) => {
//   return useMutation({
//     mutationFn: async (payload: any) => {
//       await postRequest({
//         endpoint: '/admin/agent',
//         payload,
//         token,
//       })
//     },
//   })
// }
