const customerController = require("../controller/customerController");

const router = require("express").Router();

// ADD CUSTOMER
router.post("/" , customerController.addCustomer);

//GET CUSTOMER
router.get("/", customerController.getCustomer);

module.exports = router;