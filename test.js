var validation = require("validationHelper.js");

var items_to_validated = [
    dataRetrievedFromForm.user_email,
    dataRetrievedFromForm.user_username,
    dataRetrievedFromForm.user_password,
    dataRetrievedFromForm.user_confirm_password
];
var validation_errors = [
    "E-mail field is required",
    "Username field is required",
    "Password field is required",
    "Confirm password field is required"
];
validation.isPresent(items_to_validated, validation_errors);
validation.isEmail(dataRetrievedFromForm.user_email, "E-mail doesn't appear to be valid");
validation.isTheRightLength(dataRetrievedFromForm.user_email, 254, "E-mail it's too long");
validation.isEqual(dataRetrievedFromForm.user_password, dataRetrievedFromForm.user_confirm_password, "Passwords doesn't match");

if (!(validation.errors.length == 0)) {

    /**
     *  This is the case when errors array has some elements
     **/
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(validation.errors));

} else {

    /**
     *  This is the case when the validation is passed and you need to send the success response
     **/
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(success.response));

}