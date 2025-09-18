import { genToken } from "../config/token.js";
import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter valid email" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Enter strong password" });
    }

    let hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    let token = await genToken(user._id);

    res.cookie("token", token, {  
      httpOnly: true,
      secure: false, // set true in production (https)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json(user);
  } catch (error) {
    console.log("register error", error);
    return res.status(500).json({ message: `registration error ${error}` });
  }
};export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    console.log("req.body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("DB user password:", user.password);

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error("login error", error);
    return res.status(500).json({ message: `login error: ${error.message}` });
  }
};

export const logOut = async(req,res)=>{
try{
  res.clearCookie("token");
  return res.status(200).json({message:"logout successful"})
}
catch{
  console.log("login error")
  return res.status(500).json({message:`logout error ${error}`})
}
}

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Google login successful",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("google login error", error);
    return res
      .status(500)
      .json({ message: `google login error: ${error.message}` });
  }
};
