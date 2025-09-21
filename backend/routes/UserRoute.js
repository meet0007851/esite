import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../constroller/userController.js";
let userRoutes = express.Router()
userRoutes.get("/getcurrentuser",isAuth,getCurrentUser)
export default userRoutes