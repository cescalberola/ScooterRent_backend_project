const express = require ("express");
const ReviewController = require("../controllers/ReviewController");

const router = express.Router();

router.post("/create",ReviewController.create);
router.get("/", ReviewController.getAll);
router.get("/id/:id",ReviewController.getById)

module.exports = router;