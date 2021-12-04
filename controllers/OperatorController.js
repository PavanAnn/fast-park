//controller
module.exports = () => {
    const bd = require('../bd/bd');
    const request_origin = 'http://127.0.0.1:5500';
	const controller = {};

	controller.getOperators = async(req, res) => { 
         res.setHeader('Access-Control-Allow-Origin', request_origin);
         const result = await bd.selectAllOperators(req);
         res.status(200).json(result); console.log(result); };
    controller.getOperatorById = async(req, res) => { app.setHeader('Access-Control-Allow-Origin', request_origin); res.status(200).json(bd.selectOperatorById(req)); };
    
    controller.createOperator = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin); 
        const result = await bd.createOperator(req); 
        if (result != "Response is undefined") res.status(200).json(result); 
        else res.status(500).json(result);
    };
    return controller;
}