const actions = require('./module.actions').actions;

module.exports = {
    description: 'Genera los archivos módulo para el store',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Ingrese el nombre del Módulo',

        },
    ],
    actions: actions,
}
