const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput = data => {
  let error = '';
// Convert empty fields to an empty string so we can use validator functions
  data.login = !isEmpty(data.login) ? data.login : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
  if (Validator.isEmpty(data.login)) {
    error = "Podaj Login!";
  } 
// Password checks
  if (Validator.isEmpty(data.password)) {
    error = "Podaj hasło!";
  }
return {
    error,
    isValid: isEmpty(error)
  };
};