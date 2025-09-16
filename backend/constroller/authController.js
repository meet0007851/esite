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
    const newUser = await User.create({ name, email, password: hashPassword });

    let token = await genToken(newUser._id);

    res.cookie("token", token, {  
      httpOnly: true,
      secure: false, // set true in production (https)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.log("register error", error);
    return res.status(500).json({ message: `registration error ${error}` });
  }
};

export const login = async(req,res) =>{
  try{
    let {email,password} = req.body;
    let user = await User.findOne({email})
    if(!user){
      return res.status(404).json({message:"user is not found"})
    }
    let isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({message:"incorrect password"})
    }
 let token = await genToken(newUser._id);

    res.cookie("token", token, {  
      httpOnly: true,
      secure: false, // set true in production (https)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({message:"login successful"});
  }
  catch{}
}