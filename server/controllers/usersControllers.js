const User = require('../models/usersModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config");

// Load input validation
const validateLoginInput = require("../helpers/login");

exports.checkLogin = async (req, res) => {
    try {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) res.status(400).json(errors);

    const login = req.body.login;
    const password = req.body.password;
    
    const user = await User.findOne({ login });
    if (!user) res.status(404).json({ emailnotfound: "Email not found" });

    let hash = await bcrypt.hashSync(user.password, 10);
    
    const isMatch = await bcrypt.compareSync(password, hash);

    if (isMatch) {
        const payload = {
            id: user.id,
            name: user.name
        }
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
    } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
    };

    } catch(e) {
        res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
    }
};