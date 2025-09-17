import express from 'express'
import { login, logOut, registration } from '../constroller/authController.js';
const authRoute = express.Router();
authRoute.post("/registration",registration)
authRoute.post("/login",login)
authRoute.get("/logOut",logOut)

export default authRoute    