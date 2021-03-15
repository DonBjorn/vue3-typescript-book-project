// No se está usando TS por falta de soporte
const storeModel = require('./src/plop/generators/model');
const storeModule = require('./src/plop/generators/module');
const store = require('./src/plop/generators/store');

module.exports = function (plop) {
    plop.setGenerator('store', store);
    plop.setGenerator('store-model', storeModel);
    plop.setGenerator('store-module', storeModule);
};
