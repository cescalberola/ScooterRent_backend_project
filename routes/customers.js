const express = require ("express");
const CustomerController = require("../controllers/CustomerController");
const { authentication } = require ("../middleware/authentication.js")

const router = express.Router();

router.post("/",CustomerController.create);
router.get("/", CustomerController.getAll);
router.delete("/id/:id", CustomerController.delete);
router.put("/id/:id", CustomerController.update);
router.post("/login", CustomerController.login);
router.delete("/logout",authentication, CustomerController.logout);




module.exports = router;