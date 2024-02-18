export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  LOGOUT: "/logout",
  CONTACT: "/contacto",
  FORGOT_PASSWORD: "/recuperar-clave",
  CHANGE_PASSWORD: "/cambiar-clave/:token",
  CREATE_ADMIN: "/crear-admin",
}

const PRIVATE_BASE: string = "/app"

export const PRIVATE_ROUTES = {
  HOME: PRIVATE_BASE,
  USERS: `${PRIVATE_BASE}/usuarios`,
  CITAS: `${PRIVATE_BASE}/citas`,
  ORDENES: `${PRIVATE_BASE}/ordenes`,
  RESULTADOS: `${PRIVATE_BASE}/resultados`,
  ESTADISTICAS: `${PRIVATE_BASE}/estadisticas`,
}
