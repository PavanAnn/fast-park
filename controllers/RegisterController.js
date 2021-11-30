//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
    const request_origin = 'http://127.0.0.1:5500';//req.get('origin'); 

	controller.getRegisters = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectAllActiveRegisters(req); 
        if (result != "Response is undefined") res.status(200).json(result); 
        else res.status(500).json(result);
    };

    controller.createRegister = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        const result = await bd.insertRegister(req);
        console.log(result); 
        res.status(200).json(result); 
    };

    controller.updateRegister = (req, res) => { 
        app.setHeader('Access-Control-Allow-Origin', request_origin); 
        res.status(200).json(bd.updateRegister(req)); };
        
    return controller;
}