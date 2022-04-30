const Customer = require("../model/model");

const customerController = {
    addCustomer: async (req ,res) => {
        try {

        } catch (err){
            res.status(500).json(err);
        }
    }
}