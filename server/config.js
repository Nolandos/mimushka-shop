const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 8000,
    DB: process.env.DB,
    secretOrKey: process.env.secretOrKey, 
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS,
};