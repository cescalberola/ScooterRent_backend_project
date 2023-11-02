const express = require ("express");
const StoreScooterController = require("../controllers/StoreScooterController");

const router = express.Router();

router.post("/",StoreScooterController.create);

module.exports = router;