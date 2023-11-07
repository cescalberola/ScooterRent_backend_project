const express = require ("express");
const StoreController = require("../controllers/StoreController");

const router = express.Router();

router.post("/",StoreController.create);
router.get("/", StoreController.getAll);
router.get("/id/:id", StoreController.getById);
router.get("/StoreName/:StoreName",StoreController.getOneByName)
router.delete("/id/:id", StoreController.delete);
router.put("/id/:id", StoreController.update);

module.exports = router;