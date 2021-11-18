const express    = require('express');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || 3000);

  // MIDDLEWARES
  app.use(express.json());

  const controllerOperators = require('../controllers/OperatorController')();
  const controllerRegisters = require('../controllers/RegisterController')();
  const controllerPayments = require('../controllers/PaymentController')();

  app.route('/operators').get(controllerOperators.getOperators);
  app.route('/operator').get(controllerOperators.getOperatorById);

  app.route('/registers').get(controllerRegisters.getRegisters);
  app.route('/register').put(controllerRegisters.createRegister);
  app.route('/register').patch(controllerRegisters.updateRegister);
  
  app.route('/payments').get(controllerPayments.getPayments);
  app.route('/payment').get(controllerPayments.getPaymentByEntranceId);
  app.route('/payment').put(controllerPayments.createPayment);

  return app;
};