import mongoose from "mongoose";

const LogPrestamoSchema = new mongoose.Schema({
  id_prestamo_mysql: Number,

  accion: String,

  descripcion: String,

  prioridad: String,

  estado: String,

  metadatos: Object,

  fecha_creacion: String,
});

export default mongoose.models.LogPrestamo ||
  mongoose.model("LogPrestamo", LogPrestamoSchema);