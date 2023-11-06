const express = require ("express");
const ReviewController = require("../controllers/ReviewController");
const { authentication, isAdmin } = require("../middleware/authentication.js");

const router = express.Router();

router.post("/create",authentication, ReviewController.create);
router.get("/", ReviewController.getAll);
router.get("/id/:id",ReviewController.getById);
router.get("/title/:title",ReviewController.getOneByName);
router.delete("/id/:id",authentication, isAdmin, ReviewController.delete);
router.put("/id/:id", authentication, isAdmin, ReviewController.update);

module.exports = router;