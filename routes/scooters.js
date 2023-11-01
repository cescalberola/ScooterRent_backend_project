const express = require ("express");
const ScooterController = require("../controllers/ScooterController");

const router = express.Router();


router.post("/",ScooterController.create);
router.get("/", ScooterController.getAll);
router.delete("/id/:id", ScooterController.delete);
router.put("/id/:id", ScooterController.update);


module.exports = router;