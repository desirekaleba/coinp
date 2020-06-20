const isRequired = function(input) {

    return input === '' ? 'Please Enter your API key' : true;
}

module.exports = isRequired;