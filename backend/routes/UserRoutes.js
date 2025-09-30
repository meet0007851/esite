import express from "express";
import isAuth from "../middleware/isAuth.js";
import { getAdmin, getCurrentUser } from "../constroller/userController.js";
import adminAuth from "../middleware/AdminAuth.js";
let userRoutes = express.Router()
userRoutes.get("/getCurrentUser",isAuth,getCurrentUser)
userRoutes.get("/getadmin",adminAuth,getAdmin) 

export default userRoutes