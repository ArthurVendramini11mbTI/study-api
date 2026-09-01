import { Router } from "express";
import * as userController from "../controllers/user.controller";

const userRouter = Router()

userRouter.get('/get-user', userController.getUser)

export default userRouter