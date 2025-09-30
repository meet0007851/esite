import jwt from "jsonwebtoken"
const adminAuth = async (req, res, next) => {

    try {
        let { token } = req.cookies
        if (!token) {
            return res.status(400).json({ message: "not authorized login again" })
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRETE)
        if (!verifyToken) {
            return res.status(400).json({ message: "not authorized login again,invalid token" })
        }
        req.adminEmail = process.env.ADMIN_EMAIL
        next()
    }
    catch(error){
        console.log("isAuth error")
        return res.status(500).json({message:`isAuth error ${error}`})
    }
}

export default adminAuth