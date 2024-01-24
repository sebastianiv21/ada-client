import { create } from "zustand"

interface Auth {
  accessToken: string | null
  rol: string | null
  idUsuario: string | null
}

interface AuthInfo {
  accessToken: string | null
  role: string | null
  userId: string | null
}

interface AuthStore extends AuthInfo {
  setAuth: (auth: Auth) => void
  setToken: (accessToken: string) => void
}

const initialState: AuthInfo = {
  accessToken: null,
  role: null,
  userId: null,
}

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,
  setAuth: (auth) =>
    set(() => ({
      accessToken: auth.accessToken,
      role: auth.rol,
      userId: auth.idUsuario,
    })),
  setToken: (accessToken) => set(() => ({ accessToken })),
  resetAuth: () => set(() => initialState),
}))
