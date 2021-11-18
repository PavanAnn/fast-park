//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
    const request_origin = 'http://127.0.0.1:5500';//req.get('origin'); 

	controller.getRegisters = async(req, res, entrance_time) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectAllActiveRegisters(entrance_time); 
        res.status(200).json(result); 
        console.log(result); };

    controller.createRegister = async(req, res, id, license, entrance_type) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin); 
        const result = await bd.insertRegister(id, license, entrance_type); 
        res.status(200).json(result); 
        console.log(result); };

    controller.updateRegister = (req, res, exit_time, license, entrance_time) => { 
        app.setHeader('Access-Control-Allow-Origin', request_origin); 
        res.status(200).json(bd.updateRegister(exit_time, license, entrance_time)); };
        
    return controller;
}