const modelActions = require('./model.actions').actions;
const moduleActions = require('./module.actions').actions;

let actions = [];
actions = actions.concat(modelActions);
actions = actions.concat(moduleActions);

console.log(actions);

module.exports = {
    description: 'Genera los archivos de modelo y módulo para el store',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Ingrese el nombre del módulo',

        },
    ],
    actions: actions,
}
