import express from 'express'
import { adminLogin, googleLogin, login, logOut, registration } from '../constroller/authController.js';
const authRoute = express.Router();
authRoute.post("/registration",registration)
authRoute.post("/login",login)
authRoute.get("/logOut",logOut)
authRoute.post("/googlelogin",googleLogin)
authRoute.post("/adminlogin",adminLogin) 

export default authRoute    