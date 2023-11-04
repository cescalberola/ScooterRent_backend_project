const express = require ("express");
const CustomerController = require("../controllers/CustomerController");
const { authentication } = require ("../middleware/authentication.js")

const router = express.Router();

router.post("/",CustomerController.create);
router.post("/login", CustomerController.login);
router.get("/",authentication, CustomerController.getAll);
router.get("/id/:id", CustomerController.getById);
router.get("/name/:name", CustomerController.getOneByName);
router.put("/id/:id",authentication, CustomerController.update);
router.delete("/id/:id",authentication, CustomerController.delete);
router.delete("/logout",authentication, CustomerController.logout);

module.exports = router;