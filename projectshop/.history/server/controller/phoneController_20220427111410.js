const Phone = require("../model/model");

const phoneController = {
    //ADD PHONE
    addPhone: async (req, res) => {
        try {
            const newPhone = new Phone(req.body);
            const savedPhone = await newPhone.save();
            res.status(200).json(savedPhone);

        } catch (err) {
            res.status(500).json(err)

        }
    },

    //GET PHONE
    getPhone: async (req ,res) =>{
        try{

        } catch (err){
            res.status(500).json(err)
        }
    },
};
module.exports = phoneController;