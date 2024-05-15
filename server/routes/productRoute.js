import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getTotalProduct,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";
import rateLimitMiddleware from "../middleware/rateLimit.js";

const router = express.Router();

router.post("/createProduct",rateLimitMiddleware, createProduct);
router.get("/getProducts", getProducts);
router.get("/getProduct", singleProduct);
router.get("/getTotalProduct", getTotalProduct);
router.delete("/deleteProduct", deleteProduct);
router.patch("/updateProduct", updateProduct);

export default router;
