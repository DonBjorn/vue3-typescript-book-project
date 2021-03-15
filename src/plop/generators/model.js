const actions = require('./model.actions').actions;

module.exports = {
    description: 'Genera los archivos de modelo para el store',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Ingrese el nombre del módulo para crear el Model',

        },
    ],
    actions: actions,
}
