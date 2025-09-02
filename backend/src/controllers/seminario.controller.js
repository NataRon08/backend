import mongoose from 'mongoose'
import Seminario from '../models/Seminario.js'

export const listSeminarios = async (req, res, next) => {
  try {
    const { q } = req.query
    const filter = q
      ? { $or: [ { titulo: { $regex: q, $options: 'i' } }, { descripcion: { $regex: q, $options: 'i' } } ] }
      : {}
    const items = await Seminario.find(filter).sort({ fecha: 1 })
    res.json(items)
  } catch (err) { next(err) }
}

export const getSeminario = async (req, res, next) => {
  try {
    const { id } = req.params
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'ID inválido' })
    const item = await Seminario.findById(id)
    if (!item) return res.status(404).json({ message: 'No encontrado' })
    res.json(item)
  } catch (err) { next(err) }
}

export const createSeminario = async (req, res, next) => {
  try {
    const data = req.body
    const item = await Seminario.create(data)
    res.status(201).json(item)
  } catch (err) { next(err) }
}

export const updateSeminario = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = req.body
    const item = await Seminario.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    if (!item) return res.status(404).json({ message: 'No encontrado' })
    res.json(item)
  } catch (err) { next(err) }
}

export const deleteSeminario = async (req, res, next) => {
  try {
    const { id } = req.params
    const item = await Seminario.findByIdAndDelete(id)
    if (!item) return res.status(404).json({ message: 'No encontrado' })
    res.json({ message: 'Eliminado', id })
  } catch (err) { next(err) }
}
