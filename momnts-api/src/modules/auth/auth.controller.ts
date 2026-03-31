import 'dotenv/config'
import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { prismaClient } from '../../lib/prisma.ts'

const JWT_SECRET : string|undefined = process.env.JWT_SECRET!

// Validation schemas
const registerSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const loginSchema = z.object({
    email: z.email('Invalid email address'),
    password: z.string().min(6),
})

export const register = async (req: Request, res: Response) => {
    try {
        const parsed = registerSchema.safeParse(req.body);

        if (!parsed.success) {
            return res.status(400).json({ message: "invalid input" })
        }
        const { name, email, password } = parsed.data;

        const existing = await prismaClient.user.findUnique({
            where: { email }
        })

        if (existing) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password_hash: hashedPassword
            }
        })

        return res.status(201).json({
            message: "User registered",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const parsed = loginSchema.safeParse(req.body)

        if (!parsed.success) {
            return res.status(400).json({ message: "Invalid input" })
        }

        const { email, password } = parsed.data

        const user = await prismaClient.user.findUnique({
            where: { email }
        })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const isValid = await bcrypt.compare(password, user.password_hash)

        if (!isValid) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign(
            { userId: user.id },
            JWT_SECRET,
            { expiresIn: '7d' },
        )

        return res.json({
            token, 
            user:{
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
}
