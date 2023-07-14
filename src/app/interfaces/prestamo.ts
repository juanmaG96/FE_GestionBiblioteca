export interface Prestamo{
  id?: number
  fechaInicio: Date,
  fechaFin: Date,
  fechaVencimiento: Date,
  usuarioId: number,
  ejemplarId: number
}
