const router = require("express").Router();
const controller = require("../controllers/cart.controller");
const { requireAuth, requireRole } = require("../middleware/auth.middleware");

// samo ulogovan user
router.get("/", requireAuth, requireRole("user", "admin"), controller.getCart);
router.post("/", requireAuth, requireRole("user", "admin"), controller.addToCart);
router.delete("/", requireAuth, requireRole("user", "admin"), controller.clearCart);
router.delete("/:productId", requireAuth, requireRole("user", "admin"), controller.removeFromCart);
router.patch("/:productId", requireAuth, requireRole("user", "admin"), controller.updateCartItemQuantity);

module.exports = router;
