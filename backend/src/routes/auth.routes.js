import { Router } from "express";
import { loginValidator} from "../validators/auth.validator.js";
import {login, getMe } from "../controllers/auth.controller.js";
import verifyAuth from "../middlewares/verifyAuth.js";


const authRouter = Router();



// POST api/auth/login
authRouter.post("/login", loginValidator, login);

authRouter.get("/get-me", verifyAuth, getMe);

export default authRouter;