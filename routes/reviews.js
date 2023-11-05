const express = require ("express");
const ReviewController = require("../controllers/ReviewController");
const { authentication } = require("../middleware/authentication");

const router = express.Router();

router.post("/create",authentication, ReviewController.create);
router.get("/", ReviewController.getAll);
router.get("/id/:id",ReviewController.getById);
router.get("/title/:title",ReviewController.getOneByName);
router.delete("/id/:id",ReviewController.delete)

module.exports = router;