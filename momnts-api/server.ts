import 'dotenv/config'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Momnts API is running')
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})