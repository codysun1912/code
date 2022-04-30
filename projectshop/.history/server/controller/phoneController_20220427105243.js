const Phone = require("../model/model");

const phoneController = {
    //ADD PHONE
    addPhone: async (req, res) => {
        try {
            const newPhone = new Phone(req.body);
            const savePhone = await newPhone.save();

        } catch (err) {
            res.status(500).json(err)

        }
    },
};
module.exports = phoneController;