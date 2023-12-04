import {
  cambiarClave as cambiarClaveService,
  login,
  recuperarClave as recuperarClaveService,
  refresh,
} from "@/api/auth"
import { useAuthStore } from "@/context/authStore"
import {
  type CambiarClaveFormData,
  type LoginFormData,
  type RecuperarClaveFormData,
} from "@/types/usuarioTypes"
import { toast } from "sonner"
import { useLocation, useParams } from "wouter"

type UseAuth = () => {
  loginUser: (formData: LoginFormData) => Promise<void>
  refreshToken: () => Promise<void>
  recuperarClave: (formData: RecuperarClaveFormData) => Promise<void>
  cambiarClave: (formData: CambiarClaveFormData) => Promise<void>
}

const useAuth: UseAuth = () => {
  const { token } = useParams()
  const [_, setLocation] = useLocation()
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

  const recuperarClave = async (
    formData: RecuperarClaveFormData,
  ): Promise<void> => {
    try {
      const { message } = await recuperarClaveService(formData)

      toast.success(message)
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

  const cambiarClave = async (
    formData: CambiarClaveFormData,
  ): Promise<void> => {
    console.log(token)
    console.log(formData)
    try {
      const { message } = await cambiarClaveService(formData, token)

      toast.success(message)
      setLocation("/login")
    } catch (error) {
      toast.error(error?.response?.data.message)
    }
  }

  return {
    loginUser,
    refreshToken,
    recuperarClave,
    cambiarClave,
  }
}

export default useAuth