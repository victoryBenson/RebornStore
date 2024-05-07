import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'

export const protect = async(req, res, next) => {
    try {
        let token;

        const authHeader = req.headers.Authorization || req.headers.authorization

        if(authHeader?.startsWith('Bearer')){
            // get token from the header
            token = authHeader.split(" ")[1]
        }else if (req.cookies.token){
            // get token from cookie
            token = req.cookies.token;
        }

        if(!token){
            return res.status(401).json({message:"Not authorized, Please login"});
        }
        
        //verify token
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        // get user through the verified token 
        const user = await User.findById(verified.userId).select("-password")

        if(!user){
        return res.status(401).json({message: "User not found"})
        }

        req.user = user
        next()

    } catch (error) {
        next(error)
    }
}

export const adminOnly = (req, res, next) => {
    try {
        if (req.user && req.user.role === "admin") {
            next()
        } else{ 
            return res.status(401).json({message:"Not authorized, Admin content Only"});
        }
        
    }
    catch (error) {
        next(error)
    }
}