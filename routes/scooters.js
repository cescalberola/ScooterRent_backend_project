const express = require ("express");
const ScooterController = require("../controllers/ScooterController");
const { isAdmin } = require("../middleware/authentication");

const router = express.Router();


router.post("/",isAdmin,ScooterController.create);
router.get("/id/:id", ScooterController.getById);
router.get("/name/:name", ScooterController.getOneByName);
router.get("/", ScooterController.getAll);
router.delete("/id/:id",isAdmin,ScooterController.delete);
router.put("/id/:id",isAdmin,ScooterController.update);
router.get("/price/desc", ScooterController.sortByPrice);
router.get("/price/:price",ScooterController.getByPrice);


module.exports = router;