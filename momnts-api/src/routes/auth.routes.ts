import { Router } from "express";
import {
  loginUserController,
  logoutUserController,
  registerUserController,
} from "../controllers/auth.contoller";

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

authRouter.post("/register", registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a new user
 * @access Public
 */

authRouter.post("/login", loginUserController);

/**
 * @route GET /api/auth/logout
 * @description Logout the current user and invalidate session
 * @access Public
 */

authRouter.post("/logout", logoutUserController);

export { authRouter };
