const { CustomerScooter, Scooter} = require ("../models/index.js");

const CustomerScooterController = {
  async create (req, res) {
    try {
      const customerScooter = await CustomerScooter.create ({CustomerId:req.customer.id,ScooterId:req.body.ScooterId});
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

async getAllByUser(req, res) {
  const { CustomerId } = req.params;

  try {
    const customerScooter = await CustomerScooter.findAll({
      where: { CustomerId: CustomerId },
      include: [Scooter],
    });

    if (customerScooter.length === 0) {
      return res.status(404).send({
        message: `No se encontraron pedidos para el usuario con ID ${CustomerId}`,
      });
    }

    res.send(customerScooter);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Hubo un problema al buscar los pedidos del usuario",
    });
  }
},

}
module.exports = CustomerScooterController
