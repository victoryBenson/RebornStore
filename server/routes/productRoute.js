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
router.get("/getProduct/:id", singleProduct);
router.get("/getTotalProduct", getTotalProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.patch("/updateProduct/:id", updateProduct);

export default router;
