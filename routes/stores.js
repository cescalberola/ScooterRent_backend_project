const express = require ("express");
const StoreController = require("../controllers/StoreController");

const router = express.Router();

router.post("/",StoreController.create);
router.get("/", StoreController.getAll);
router.delete("/id/:id", StoreController.delete);
router.put("/id/:id", StoreController.update);

module.exports = router;