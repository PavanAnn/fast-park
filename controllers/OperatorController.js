//controller
module.exports = () => {
    const bd = require('../bd/bd');
	const controller = {};
	controller.getOperators = async(req, res) => { 
        const request_origin = req.get('origin'); res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); const result = await bd.selectAllOperators(); res.status(200).json(result); console.log(result); };
    controller.getOperatorById = (req, res, id) => { app.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); res.status(200).json(bd.selectOperatorById(id)); };

    return controller;
}