import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import connectDB from './config/db.js'
import seminarioRoutes from './routes/seminario.routes.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(express.json())
app.use(morgan('dev'))

// CORS básico (mejor restringir dominios en producción)
const allowed = (process.env.ALLOWED_ORIGINS || '*').split(',').map(o => o.trim())
const corsOptions = allowed.includes('*')
  ? {}
  : {
      origin: function (origin, cb) {
        if (!origin || allowed.includes(origin)) cb(null, true)
        else cb(new Error('CORS no permitido'))
      },
    }
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({ name: 'seminarios-api', version: '1.0.0', status: 'ok' })
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/seminarios', seminarioRoutes)

app.use(notFound)
app.use(errorHandler)

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Servidor escuchando en puerto ${PORT}`))
})
