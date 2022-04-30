const Customer = require("../model/model");

const customerController = {
    addCustomer: async (req ,res) => {
        try {
            const newCustomer = new Customer(req.body);
            const savedCustomer = await newCustomer.save();
            res.status(200).json(savedCustomer);

        } catch (err){
            res.status(500).json(err);
        }
    }
}

module.exports = customerController;