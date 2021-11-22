module.exports = app => {
    const controller = require('../controllers/RegisterController')();
  
    app.route('/registers').get(controller.getRegisters);
    app.route('/register').put(controller.createRegister);
    app.route('/register').patch(controller.updateRegister);
}
