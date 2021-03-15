const pathTemplates = require('../constants').pathTemplates;

module.exports = {
    actions: [
        {
            type: 'add',
            abortOnFail: true,
            path: 'src/models/store/{{ dashCase name }}s/{{ pascalCase name }}MutationType.ts',
            templateFile: pathTemplates + '/store-model/MutationType.ts.hbs'
        },
        {
            type: 'add',
            abortOnFail: true,
            path: 'src/models/store/{{ dashCase name }}s/{{ pascalCase name }}sState.interface.ts',
            templateFile: pathTemplates + '/store-model/State.interface.ts.hbs'
        },
    ],
};
