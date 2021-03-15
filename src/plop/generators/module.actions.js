const pathTemplates = require('../constants').pathTemplates;

module.exports = {
    actions: [
        {
            type: 'add',
            abortOnFail: true,
            path: 'src/store/{{ dashCase name }}s/index.ts',
            templateFile: pathTemplates + '/store-module/index.ts.hbs'
        },
        {
            type: 'add',
            abortOnFail: true,
            path: 'src/store/{{ dashCase name }}s/InitialState.ts',
            templateFile: pathTemplates + '/store-module/InitialState.ts.hbs'
        },
        {
            type: 'add',
            abortOnFail: true,
            path: 'src/store/{{ dashCase name }}s/module.ts',
            templateFile: pathTemplates + '/store-module/module.ts.hbs'
        },
    ],
};
