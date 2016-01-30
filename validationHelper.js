/**
 * @author Robert Dumitrescu
 * @file This is the static class for all sorts of validations
 * @version 0.0.1 pre-alpha
 * */

/**
 * @constructs
 * */

var Validation = function () {
};

/**
 * @property {array} errors
 * @static
 * @memberof Validation
 * */

Validation.errors = [];

/**
 * @description This is the simplest method for boolean validation.
 * @description It returns a boolean value if the item is validated or not.
 *
 * @static
 * @param item_to_validate
 * @returns {boolean}
 * @memberof Validation
 */

Validation.isBoolPresent = function (item_to_validate) {
    console.log("isBoolPresent validation method triggered");

    var presence_condition = item_to_validate == null || item_to_validate === "undefined" || item_to_validate == undefined;

    if (presence_condition) {
        return false;
    } else {
        var escaped_string = item_to_validate.replace(/\s/g, '');
        return !(escaped_string === "");
    }

};

/**
 * @description The isPresent method is used for presence validation for array objects.
 * @description item_to_validate and validation_error arrays must be the same size.
 * @description The item to be validated is matched with the possible error message is matched by the array index.
 *
 * @static
 * @returns {void}
 * @function presenceValidation
 * @memberof Validation
 * @param item_to_validate
 * @param validation_error
 */

Validation.isPresent = function (item_to_validate, validation_error) {
    // console.log("isPresent validation method triggered");
    if (typeof(item_to_validate) === "string" && !(Validation.isBoolPresent(item_to_validate))) {
        Validation.errors.push(validation_error);
    }
    else if (item_to_validate instanceof Array) {
        if (item_to_validate.length == validation_error.length) {

            for (var item_to_validate_iterator = 0; item_to_validate_iterator < item_to_validate.length; item_to_validate_iterator++) {
                if (!(Validation.isBoolPresent(item_to_validate[item_to_validate_iterator]))) {
                    Validation.errors.push(validation_error[item_to_validate_iterator]);
                } // item_to_validate[item_to_validate_iterator]
            }
        } else {
            console.log("The arrays (item_to_validate and validation_error) were not the same size.");
        }
    } else {
        console.log("Something went wrong with the validation");
    }
};

/**
 * @description This method is used for string length validation.
 * @description If the error occurs, it pushes the error to error global array.
 *
 * @static
 * @returns {void}
 * @memberof Validation
 * @param item_to_validate
 * @param maximum_allowed_length
 * @param validation_error
 */

Validation.isTheRightLength = function (item_to_validate, maximum_allowed_length, validation_error) {
    // console.log("isTheRightLength validation method triggered");

    if (Validation.isBoolPresent(item_to_validate)) {
        if (item_to_validate.length > maximum_allowed_length) {
            Validation.errors.push(validation_error);
        }
    }
};

/**
 * @description This is the method to validate the e-mail validation.
 * @description The matching is made by processing with and Regular Expression (RegEx)
 *
 * @static
 * @returns {void}
 * @memberof Validation
 * @param item_to_validate
 * @param validation_error
 */

Validation.isEmail = function (item_to_validate, validation_error) {
    // console.log("isEmail validation method triggered");

    var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (Validation.isBoolPresent(item_to_validate)) {
        if (!(emailExpression.test(item_to_validate))) {
            Validation.errors.push(validation_error);
        }
    }
};

/**
 * @description This method is used to compare two string entities.
 * @description If the entitites doesn't match, the third argument is pushed to errors array.
 *
 * @static
 * @returns {void}
 * @memberof Validation
 * @param item_to_compare
 * @param comparison_item
 * @param validation_error
 */

Validation.isEqual = function (item_to_compare, comparison_item, validation_error) {
    // console.log("isEqual validation method triggered");

    if (Validation.isBoolPresent(item_to_compare) && Validation.isBoolPresent(comparison_item)) {
        if (!(item_to_compare == comparison_item)) {
            Validation.errors.push(validation_error);
        }
    }
};

/**
 * @type {Function}
 */
module.exports = Validation;