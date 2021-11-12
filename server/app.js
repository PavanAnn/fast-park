const express    = require('express');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || 3000);

  // MIDDLEWARES
  app.use(express.json());
  // Load routes
  //const indexRoutes = require('../routes/operators');
  //app.use('/', indexRoutes);
  const controller = require('../controllers/OperatorController')();
  
  app.route('/operators').get(controller.getOperators);
  app.route('/operator').get(controller.getOperatorById);

  return app;
};