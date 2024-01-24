import {
  cambiarClaveService,
  login,
  logoutService,
  recuperarClaveService,
  refresh,
} from "@/api/auth"
import { useAuthStore } from "@/context/authStore"
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes/routesList"
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
  logoutUser: () => Promise<void>
}

const useAuth: UseAuth = () => {
  const { token } = useParams()
  const [_, setLocation] = useLocation()
  const setAuth = useAuthStore((state) => state.setAuth)
  const setToken = useAuthStore((state) => state.setToken)
  const resetAuth = useAuthStore((state) => state.resetAuth)

  const loginUser = async (formData: LoginFormData): Promise<void> => {
    try {
      const authInfo = await login(formData)

      toast.success("Ingreso exitoso")
      setAuth(authInfo)

      setLocation(PRIVATE_ROUTES.HOME)

      console.log(authInfo)
    } catch (error) {
      if (error?.code === "ERR_NETWORK") {
        toast.error("No se pudo conectar con el servidor")
      } else {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  const refreshToken = async (): Promise<void> => {
    try {
      const accessToken = await refresh()

      setToken(accessToken)
    } catch (error) {
      if (error?.code === "ERR_NETWORK") {
        toast.error("No se pudo conectar con el servidor")
      } else {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  const recuperarClave = async (
    formData: RecuperarClaveFormData,
  ): Promise<void> => {
    try {
      const { message } = await recuperarClaveService(formData)

      toast.success(message)
    } catch (error) {
      if (error?.code === "ERR_NETWORK") {
        toast.error("No se pudo conectar con el servidor")
      } else {
        toast.error(error?.response?.data?.message)
      }
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
      setLocation(PUBLIC_ROUTES.LOGIN)
    } catch (error) {
      if (error?.code === "ERR_NETWORK") {
        toast.error("No se pudo conectar con el servidor")
      } else {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  const logoutUser = async (): Promise<void> => {
    try {
      const { message } = await logoutService()
      resetAuth()
      toast.success(message)
    } catch (error) {
      if (error?.code === "ERR_NETWORK") {
        toast.error("No se pudo conectar con el servidor")
      } else {
        toast.error(error?.response?.data?.message)
      }
    }
  }

  return {
    loginUser,
    refreshToken,
    recuperarClave,
    cambiarClave,
    logoutUser,
  }
}

export default useAuth
