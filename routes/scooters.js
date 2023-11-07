const express = require ("express");
const ScooterController = require("../controllers/ScooterController");
const { isAdmin, authentication } = require("../middleware/authentication");

const router = express.Router();


router.post("/",authentication, isAdmin,ScooterController.create);
router.get("/id/:id", ScooterController.getById);
router.get("/name/:name", ScooterController.getOneByName);
router.get("/", ScooterController.getAll);
router.delete("/id/:id",authentication, isAdmin,ScooterController.delete);
router.put("/id/:id",authentication, isAdmin,ScooterController.update);
router.get("/price/desc", ScooterController.sortByPrice);
router.get("/price/:price",ScooterController.getByPrice);


module.exports = router;