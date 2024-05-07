import express from 'express'
import { Login, Logout, Register, getLoginStatus} from '../controllers/authController.js';
import rateLimitMiddleware from '../middleware/rateLimit.js';
const router = express.Router()


router.post('/login', Login);
router.post("/register", Register); //rateLimitMiddleware,
router.get('/getLoginStatus', getLoginStatus);
router.get('/logout', Logout); //verifyJWT,


export default router;