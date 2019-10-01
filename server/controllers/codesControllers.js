const Code = require('../models/codesModel');

exports.checkDiscountCode = async (req, res) => {

    try {
        const { name } = req.params;
        const discountCodes = await Code.find();
        const correctCode = discountCodes.find(code => code.name === name);
        
        res.status(200).json(correctCode);
      
    } catch(err) {
      res.status(500).json(err.response.data);
    }

};