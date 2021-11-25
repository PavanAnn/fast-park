//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
    const request_origin = 'http://127.0.0.1:5500';//req.get('origin'); 

	controller.getRegisters = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectAllActiveRegisters(req); 
        res.status(200).json(result); 
        console.log(result); };

    controller.createRegister = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', req.get('origin')); 
        const result = await bd.insertRegister(req); 
        res.status(200).json(result); 
        console.log(result); };

    controller.updateRegister = (req, res) => { 
        app.setHeader('Access-Control-Allow-Origin', request_origin); 
        res.status(200).json(bd.updateRegister(req)); };
        
    return controller;
}