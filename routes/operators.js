
module.exports = app => {
    const controller = require('../controllers/OperatorController')();
  
    app.route('/operators').get(controller.getOperators);
    app.route('/operator').get(controller.getOperatorById);
}
