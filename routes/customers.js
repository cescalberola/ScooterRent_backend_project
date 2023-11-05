const express = require ("express");
const CustomerController = require("../controllers/CustomerController");
const { authentication } = require ("../middleware/authentication.js")

const router = express.Router();

router.post("/",authentication, CustomerController.create);
router.post("/login",authentication, CustomerController.login);
router.get("/", CustomerController.getAll);
router.get("/id/:id", CustomerController.getById);
router.get("/name/:name", CustomerController.getOneByName);
router.put("/id/:id", CustomerController.update);
router.delete("/id/:id", CustomerController.delete);
router.delete("/logout",authentication, CustomerController.logout);

module.exports = router;