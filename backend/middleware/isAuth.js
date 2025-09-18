import jwt from "jsonwebtoken";
const isAuth = async(req,res,next)=>{
    try{
        let {token} = req.cookie
        if(!token){
            return res.status(400).json({message:"user does not token"})
        }
        let verifyToken =jwt.verify(token,process.env.JWT_SECRETE)
    }
    catch(error){

    }
}