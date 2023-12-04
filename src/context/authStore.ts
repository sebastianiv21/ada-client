import { create } from "zustand"

interface Auth {
  accessToken: string
  rol: string
  idUsuario: string
}

interface AuthStore {
  accessToken: string | null
  role: string | null
  userId: string | null
  setAuth: (auth: Auth) => void
  setToken: (accessToken: string) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,
  role: null,
  userId: null,
  setAuth: (auth) =>
    set(() => ({
      accessToken: auth.accessToken,
      role: auth.rol,
      userId: auth.idUsuario,
    })),
  setToken: (accessToken) => set(() => ({ accessToken })),
}))
