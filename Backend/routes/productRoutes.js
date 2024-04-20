import express from "express"
import formidable from "express-formidable"
const router = express.Router()

import { addProduct, updateProductDetails, removeProduct, fetchProducts, fetchProductById, allproducts, addProductReview, fetchTopProduct, fetchNewProducts, filterProducts} from "../controllers/productController.js"
import { authenticate, authorizedAdmin } from "../middlewares/authMiddleware.js"
import checkId from "../middlewares/checkId.js"

router.route("/allprocducts").get(allproducts);
router.get("/top", fetchTopProduct)
router.get("/new", fetchNewProducts)
router.route("/:id/reviews").post(authenticate, addProductReview)
router.route('/filtered-products').post(filterProducts)
router.route("/").get(fetchProducts).post(authenticate, authorizedAdmin, formidable(), addProduct)
router.route("/:id").get(fetchProductById).put(authenticate, authorizedAdmin, formidable(), updateProductDetails).delete(authenticate, authorizedAdmin, removeProduct);






export default router