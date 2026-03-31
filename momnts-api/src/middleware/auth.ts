import type { Request, Response, NextFunction } from 'express'
import  jwt  from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!

export interface AuthRequest extends Request{
    userId?: String
}

export const authMiddleware = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {

    try{
        const header = req.headers.authorization;
        if(!header){
            return res.status(401).json({ message: "No token provided"})
        }
        const token = header.split(" ")[1]
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string}

        req.userId = decoded.userId
        next()
    }catch{
        return res.status(401).json({message: "Invalid token"})
    }
}