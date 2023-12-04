import { login, refresh } from "@/api/auth"
import { useAuthStore } from "@/context/authStore"
import { type LoginFormData } from "@/types/usuarioTypes"
import { toast } from "sonner"

type UseAuth = (initialState?: boolean) => {
  loginUser: (formData: LoginFormData) => Promise<void>
  refreshToken: () => Promise<void>
}

const useAuth: UseAuth = () => {
  const setAuth = useAuthStore((state) => state.setAuth)
  const setToken = useAuthStore((state) => state.setToken)

  const loginUser = async (formData: LoginFormData): Promise<void> => {
    try {
      const authInfo = await login(formData)

      toast.success("Ingreso exitoso")
      setAuth(authInfo)
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

  const refreshToken = async (): Promise<void> => {
    try {
      const accessToken = await refresh()

      setToken(accessToken)
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

  return {
    loginUser,
    refreshToken,
  }
}

export default useAuth
