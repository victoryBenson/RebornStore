import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import validator from 'validator'
// import pkg from 'validator';
// const {isEmail, isStrongPassword} = pkg;


const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      minLength: [2, "minimum 2letters"],
      maxLength: 30,
      lowercase: true
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please add a password!"],
      validate: [validator.isStrongPassword, "Please use a strong password!"],
    }, 
    profilePicture: {
      type: String,
      require: [true, "Please add a profile picture"],
      default:
        "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg",
    },
    role:{
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
      required: [true, 'Pls choose a role!'],
      lowercase: true
    },
    address: {
      type: String,
      default: 'Nigeria'
      
    },
    phone: {
      type: String,
      default: "+234",
    },
  },
  {
    timestamps: true,
  }
);

//hash the password before saving to database!
userSchema.pre("save", async function(next){
  if (!this.isModified("password")) {
    return next;
  }

  //hash password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

//export
const User = mongoose.model("User", userSchema);
export default User;
