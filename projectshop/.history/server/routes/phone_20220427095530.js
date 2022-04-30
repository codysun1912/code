const phoneController = require("../controller/phoneController");

const router = require("express").Router();

//ADD PHONE
router.post("/" , phoneController.addPhone);

//GET PHONE
// router.get("/",phoneController.getPhone);

module.exports = router;