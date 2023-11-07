const { CustomerScooter, Scooter} = require ("../models/index.js");

const CustomerScooterController = {
  async create (req, res) {
    try {
      const customerScooter = await CustomerScooter.create (req.body);
      res.status(201).send({ message: 'CustomerScooter created successfully', customerScooter });
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },
  async getAll(req, res) {
    try {
      const customerScooter = await CustomerScooter.findAll({
        include: [Scooter],
      });
      res.send(customerScooter);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "There was a problem to find",
      });
    }
  },
};

module.exports = CustomerScooterController
