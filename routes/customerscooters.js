const express = require ("express");
const CustomerScooterController = require("../controllers/CustomerScooterController");

const router = express.Router();

router.post("/",CustomerScooterController.create);

module.exports = router;