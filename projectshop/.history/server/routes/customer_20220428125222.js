const customerController = require("../controller/customerController");

const router = require("express").Router();

// ADD CUSTOMER
router.post("/" , customerController.addCustomer);

module.exports = router;