var request = require('request');

/**
 * lookup
 * lookup a Brazil CEP.
 *
 * @name lookup
 * @function
 * @param {String} cep The CEP to be looked up.
 * @param callback The callback function retuning null (for not found results) or 'CEP' object containing:
 *
 *  - `cep` (String): CEP number.
 *  - `logradouro` (null|Number): Street name.
 *  - `bairro` (null|String): Neighborhood name.
 *  - `cidade` (String): City name.
 *  - `estado` (String): State name.
 *
 */
module.exports = function lookup (cep, callback) {

    function createObjectFromJsonP(body) {
        body = body.replace('jsonp(', '');
        body = body.replace(');', '');
        return JSON.parse(body);
    }

    var requestUrl = 'http://cepdb.com.br/api/v1/' + cep + '.jsonp.js';
    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(createObjectFromJsonP(body));
        }
        else {
            callback(null);
        }
    });
};