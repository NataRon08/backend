import mongoose from 'mongoose'

const SeminarioSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
    descripcion: { type: String, trim: true, maxlength: 1000 },
    ponente: { type: String, trim: true, maxlength: 120 },
    fecha: { type: Date, required: true },
    duracionMinutos: { type: Number, min: 15, max: 1440, default: 60 },
    capacidad: { type: Number, min: 1, max: 10000, default: 50 },
    ubicacion: { type: String, enum: ['virtual', 'presencial', 'híbrido'], default: 'virtual' },
    etiquetas: [{ type: String, trim: true, lowercase: true }],
  },
  { timestamps: true }
)

export default mongoose.model('Seminario', SeminarioSchema)
