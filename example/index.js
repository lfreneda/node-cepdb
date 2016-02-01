var cepdb = require('./../lib');

// correct cep
cepdb('15085420', function(result) {
    console.log(result);
});

//invalid cep
cepdb('123786283', function(result) {
    console.log(result);
});