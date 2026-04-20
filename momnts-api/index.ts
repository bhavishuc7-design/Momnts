import express from "express";
import type {Request, Response} from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import { authRouter } from "./src/routes/auth.routes";

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.get("/",(req:Request, res:Response)=>{
  res.send("Server is running")
})

app.use("/api/auth", authRouter)

app.listen(process.env.APP_PORT, ()=> {
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`)
})