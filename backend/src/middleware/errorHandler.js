export const notFound = (req, res, next) => {
  res.status(404)
  next(new Error(`Ruta no encontrada: ${req.originalUrl}`))
}

export const errorHandler = (err, req, res, next) => {
  const code = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500
  res.status(code).json({
    message: err.message || 'Error interno',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  })
}
