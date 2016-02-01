# node-cepdb
cliente node para consultar ceps no cepdb (https://github.com/lfreneda/cepdb)

## Instalação

```javascript
    npm install node-cepdb --save
```

## Exemplo

```javascript
    var cepdb = require('node-cepdb');

    cepdb('15085420', function(result) {

        console.log(result);

        /*
            { cep: '15085420',
              logradouro: 'Rua Félicio Antônio Siqueira',
              bairro: 'Jardim Walkíria',
              cidade: 'São José do Rio Preto',
              uf: 'SP',
              estado: 'São Paulo' }
        */
    });
```
