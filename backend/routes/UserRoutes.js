import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../constroller/userController.js";
let userRoutes = express.Router()
userRoutes.get("/getCurrentUser",isAuth,getCurrentUser)
export default userRoutes