import User from "../models/userModel.js";


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
      res.status(200).json({ message: "User deleted" });
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
      const user = await User.findByIdAndUpdate(req.user._id);

      if (!user) {
        res.status(400).json({ message: `user not found` }); 
      }

      if (user) {
      const { username, email, profilePicture, address, phone, password } = user;
      user.username = req.body.username || username;
      user.email = req.body.email || email;
      user.profilePicture = req.body.profilePicture || profilePicture;
      user.address = req.body.address || address;
      user.phone = req.body.phone || phone;
      user.password = req.body.password || password;
      

      const updateProfile = await user.save();
      res.status(200).json(updateProfile);
  
      } 
} 
catch (err) {
  next(err);
}
};
