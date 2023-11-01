const { Customer, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const  {jwt_secret}  = require('../config/config.json')['development']

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, jwt_secret);
        const customer = await Customer.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { CustomerId: customer.id },
                    { token: token }
                ]
            }
        });
        if (!tokenFound) {
            return res.status(401).send({ message: 'No estas autorizado' });
        }
        req.customer = customer;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}
module.exports = { authentication }