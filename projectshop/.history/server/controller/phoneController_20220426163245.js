const { Phone } = require("../model/model");

const phoneController = {
    addPhone: async (req, res) => {
        try{
            const newPhone = new Phone(req.body)

        }catch(err){
            res.status(500).json(err);
        }
    },
};

module.exports = phoneController;