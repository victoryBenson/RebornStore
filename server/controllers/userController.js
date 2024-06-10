import User from "../models/userModel.js";
import handleUpload from "../utils/cloudinaryConfig.js";


//getUsers
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).select("-password").sort("-createdAt");

        if (!users?.length) {
            return res.status(400).json({ message: "No user found!" });
        }

        res.status(200).json(users);
      
    } catch (err) {
        next(err)
    }
};

//getUser
export const getUser = async (req, res, next) => {
    try {
    const user = await User.findById(req.user._id).select("-password")
    if (user) {
        res.status(200).json(user);
        }
    } catch (err) {
      next(err)
    }
};

//getUsersCount
export const getUsersCount = async (req, res, next) => {
    try {
      const users = await User.find({}).count();

      res.status(200).json(users);
      
    } catch (err) {
      next(err)
    }
};


//deleteUser
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);

    if (user) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json("User not found");
    }

  } catch (error) {
    next(error);
  }
};


//updateUser
export const updateUser = async (req, res, next) => {   
    try { 

      let { username, email, address, phone, profilePicture} = req.body;
      
      if (req.file) {
  
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
  
        const result = await handleUpload(dataURI);
        profilePicture = result.secure_url
        //  console.log(profilePicture)
      }

      const user = await User.findByIdAndUpdate(req.user._id, {
        username,
        email,
        address, 
        phone,
        ...(profilePicture && { profilePicture }),
      }, { new: true });

      if (!user) {
        res.status(400).json({ message: `user not found` }); 
      }
      
      if (username) user.username = username;
      if (email) user.email = email;
      if (address) user.address = address;
      if (phone) user.phone = phone
      if (profilePicture) user.profilePicture = profilePicture;

      const updateProfile = await user.save();

      res.status(200).json(updateProfile);
  
  } catch(error) {
    next(error);
  }
}
