const express = require ("express");
const CustomerScooterController = require("../controllers/CustomerScooterController");
const { authentication } = require ("../middleware/authentication.js")

const router = express.Router();

router.post("/",authentication,CustomerScooterController.create);
router.get("/", CustomerScooterController.getAll);
router.get("/orders/:id", CustomerScooterController.getAllByUser);


module.exports = router;