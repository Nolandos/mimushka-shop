const Code = require('../models/codesModel');

exports.checkDiscountCode = async (req, res) => {

    try {
        const { name } = req.params;
        const discountCodes = await Code.find();
        const correctCode = discountCodes.find(code => code.name === name);
      
        if(correctCode) res.status(200).json(correctCode);
        else res.status(500).json('Błędny kod rabatowy!');
      
    } catch(err) {
      res.status(500).json(err);
    }

};