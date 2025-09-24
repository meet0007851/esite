import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    // Extract token from cookies
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRETE);

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("isAuth error:", error.message);
    return res.status(500).json({ message: `isAuth error ${error.message}` });
  }
};

export default isAuth;
