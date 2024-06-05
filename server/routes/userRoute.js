import express from "express";
import { deleteUser, getUsers, getUsersCount, getUser, updateUser} from "../controllers/userController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import storage from "../utils/storage.js";

const router = express.Router();

router.use(protect)


// Set up multer with the Cloudinary storage config
const upload = multer({ storage: storage });

router.get("/getUsers",adminOnly, getUsers);
router.get("/getUser", getUser)
router.get("/getUsersCount", getUsersCount);
router.delete("/deleteUser/:id", deleteUser); //verifyJWT,
router.put("/updateUser", upload.single('profilePicture'), updateUser)


export default router;
