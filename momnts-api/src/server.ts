import 'dotenv/config'
import express from 'express'
import  authRoutes  from './modules/auth/auth.routes.ts'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Momnts API is running')
})

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log("DB URL:", process.env.DATABASE_URL);
  console.log(`Server running at http://localhost:${PORT}`)
})