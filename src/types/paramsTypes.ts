export interface Params {
  Rol?: Rol[]
  TipoDocumento?: TipoDocumento[]
  Rh?: Rh[]
  EstadoCitaLaboratorio?: EstadoCitaLaboratorio[]
  Genero?: Genero[]
  TipoSangre?: TipoSangre[]
  EstadoCivil?: EstadoCivil[]
  TipoPruebaLaboratorio?: TipoPruebaLaboratorio[]
  Eps?: Ep[]
}

export interface Rol {
  _id: string
  nombre: string
}

export interface TipoDocumento {
  _id: string
  nombre: string
}

export interface Rh {
  _id: string
  nombre: string
}

export interface EstadoCitaLaboratorio {
  _id: string
  nombre: string
}

export interface Genero {
  _id: string
  nombre: string
}

export interface TipoSangre {
  _id: string
  nombre: string
}

export interface EstadoCivil {
  _id: string
  nombre: string
}

export interface TipoPruebaLaboratorio {
  _id: string
  nombre: string
  observaciones: string
  valorMinimo: number
  unidad: string
}

export interface Ep {
  _id: string
  nombre: string
}
