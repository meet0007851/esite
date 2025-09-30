import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js";
import cors from "cors";
import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const port = 8000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:5174"],
  credentials: true
}));



// DB Connection
connectDb();

// Routes
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);


// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
