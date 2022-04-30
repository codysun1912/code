const { Phone, descriptionPhone } = require("../model/model");

const phoneController = {
    addPhone: async (req, res) => {
        res.status().json(req.body);
    },
};

module.exports = phoneController;