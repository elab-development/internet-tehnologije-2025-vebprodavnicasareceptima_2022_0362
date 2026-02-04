const router = require("express").Router();
const controller = require("../controllers/userProduct.controller");
const { requireAuth, requireRole } = require("../middleware/auth.middleware");

// samo ulogovan user
router.get("/", requireAuth, requireRole("user", "admin"), controller.getMine);
router.post("/", requireAuth, requireRole("user", "admin"), controller.addMine);
router.delete("/:productId", requireAuth, requireRole("user", "admin"), controller.removeMine);

module.exports = router;
