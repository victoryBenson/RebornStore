import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



export const cookieConfig = {
  httpOnly: true,
  secure: true,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  sameSite: "None",
};


//register
export const Register = async (req, res, next) => {
  const { username, email, password, role} = req.body;
  console.log("This is working! again")
  try {
    
    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All field are required" });
    }

    const duplicate = await User.findOne({ email }).lean().exec();
  
    if (duplicate) {
      return res.status(409).json({ message: "User already exists" });
    }

      //create user data
    const userData = {
      username,
      password,
      email,
      role
    };
  
    const user  = await User.create(userData);
    console.log(`The created user is  ${user}`)

    //generate token
    const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '24h'})

    if (user) {
        user.password = undefined
        res
            .status(201)
            .cookie("token", token, {path: "/",httpOnly: true})
            .header("authorization", `Bearer ${token}`)
            .json({user, token})
        }
    
  } catch (err) {
    next(err)
  }
};


//loginUser
export const Login = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;
  
    const user = await User.findOne({ email }).lean(); //check if email already exist
    if (!user) {
      return res.status(403).json({ message: "User does no exist!" });
    }
  
    // verify password
    const verifyPwd = await bcryptjs.compare(password, user.password);
    if (!verifyPwd) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }
   
    //generate token
    const token = jwt.sign({userId: user._id}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '24h'})
  
    if (user && verifyPwd) {
       //hide password
      user.password = undefined
  
      res
        .cookie("token", token, {path: "/", httpOnly: true})
        .header("authorization", `Bearer ${token}`)
        .status(201)
        .json({user, token})
    } 
  
  } catch (err) {
    next(err)
  }
}

//Login status  
export const getLoginStatus = async (req, res, next) => {
    const token = req.cookies.token
    try {
        if(!token){
            return res.json(false)
        }
        
        //verify token
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if(verified){
            res.json(true)
        } else{
            res.json(false)
        }
    } catch (err) {
        next(err)
    }
    
};

//refresh token
// export const refreshToken = (req, res) => {
//   const cookies = req.cookies;

//   if (!cookies?.jwt) {
//     return res
//       .status(401)
//       .json({ message: "Access Denied. No refresh token provided" });
//   }

//   const refreshToken = cookies.jwt; //select a particular cookie by name

//   try {
//     const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//     const accessToken = jwt.sign(
//       { userInfo: decoded.userInfo },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: "1h" }
//     );

//     res
//       .header("Authorization", accessToken)
//       .json(decoded.userInfo.email)
//       .cookie("jwt", accessToken, cookieConfig);
//   } catch (error) {
//     return res.status(400).send("Invalid refresh token.");
//   }
// };

//logout
export const Logout = async (req, res, next) => { 
    try {
        const cookies = req.cookies;
        if (!cookies?.token) {
          return res.status(204).json("No content!"); //no content
        } else {
          res.clearCookie("token", cookieConfig);
          res.json({ message: "Cookie Cleared" });
        }
    } catch (err) {
        next(err)
    }
}

