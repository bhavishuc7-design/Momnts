import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @name registerUserController
 * @description Register a new user, expecting name, email, and password in the request body.
 * @access Public
 */
async function registerUserController(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide name, email and password",
      });
    }

    const userAlreadyExists = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userAlreadyExists) {
      if (userAlreadyExists.email === email) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password_hash: hashedPassword,
      },
    });

    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res.status(201).json({
      message: "User created successsfully",
      token,
      user: {
        id: user.id,
        username: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * @name loginUserController
 * @description Login user, expecting email and password in the request body.
 * @access Public
 */

async function loginUserController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: user.id,
        username: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return res.status(500).json({ message });
  }
}

/**
 * @name logoutUserController
 * @description Logout user by blacklisting the token from Authorization header
 * @access Private
 */

async function logoutUserController(req: Request, res: Response) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    await prisma.blacklist.create({
      data: {
        token,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


/**
 * @name getMeController
 * @description Get current logged in user details
 * @access Private
 */


export { registerUserController, loginUserController, logoutUserController };
