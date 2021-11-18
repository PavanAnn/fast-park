//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
    const request_origin = 'http://127.0.0.1:5500';//req.get('origin'); 

	controller.getPayments = async(req, res, entrance_time) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin);
        const result = await bd.selectPayments(entrance_time); 
        res.status(200).json(result); 
        console.log(result); };

        controller.getPaymentByEntranceId = async(req, res, entrance_id) => { 
            res.setHeader('Access-Control-Allow-Origin', request_origin);
            const result = await bd.selectPaymentByEntranceId(entrance_id); 
            res.status(200).json(result); 
            console.log(result); };

    controller.createPayment = async(req, res, id, license, entrance_type) => { 
        res.setHeader('Access-Control-Allow-Origin', request_origin); 
        const result = await bd.insertPayment(id, license, entrance_type); 
        res.status(200).json(result); 
        console.log(result); };
        
    return controller;
}