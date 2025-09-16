import express from 'express'
import { registration } from '../constroller/authController.js';
const authRoute = express.Router();
authRoute.post("/registration",registration)
export default authRoute    