import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import contactRoutes from './routes/contactRoutes.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.corsOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    },
  }),
)

app.use(express.json({ limit: '20kb' }))

app.get('/health', (req, res) => {
  res.json({ success: true, message: 'SPECTRON backend is running.' })
})

app.use('/api/contact', contactRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
