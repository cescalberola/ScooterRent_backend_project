const { CustomerScooter  } = require ("../models/index.js");
const CustomerScooterController = {
    create(req,res) {
        console.log("object")
        CustomerScooter .create(req.body)
        .then(customerScooter  => res.status(201).send({ message: 'CustomerScooter created succesfully', customerScooter  }))
        .catch((err) => {
            console.error(err);
            res.status(500).send(err);
          });
        },
    getAll(req, res) {
      CustomerScooter.findAll()
        .then((customerScooter) => res.send(customerScooter))
        .catch((err) => {
          console.log(err);
          res.status(500).send({
            message: "There was a problem to find",
          });
        });
    },
    }

    module.exports = CustomerScooterController