//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
    const request_origin = 'http://127.0.0.1:5500';//req.get('origin'); 

	controller.getPayments = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectPayments(req); 
        res.status(200).json(result); 
        console.log(result); };

    controller.getPaymentByEntranceId = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectPaymentByEntranceId(req); 
        res.status(200).json(result); 
        console.log(result); 
    };

    controller.createPayment = async(req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin); 
        const result = await bd.insertPayment(req); 
        if (result != "Response is undefined") res.status(200).json(result); 
        else res.status(500).json(result);
    };

    controller.updatePayment = async (req, res) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin); 
        const result = await bd.updatePayment(req); 
        if (result != "Response is undefined") res.status(200).json(result); 
        else res.status(500).json(result);
    };
        
    return controller;
}