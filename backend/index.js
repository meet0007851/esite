import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js";
dotenv.config()
let port = process.env.PORT || 6000;

const app = express();
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});
 connectDb()
app.use(express.json());
app.use(cookieParser())
app.use("/api/auth",authRoute) 
app.listen(port,()=>{
    console.log(`hello from server http://localhost:${port} `);
   
})
// mongodb+srv://rmeet0450_db_user:meet@123@cluster0.uoobp4n.mongodb.net/