const { Phone } = require("../model/model");

const phoneController = {
    addPhone: async (req, res) => {
        res.status(200).json(req.body);
    },
};

module.exports = {phoneController};