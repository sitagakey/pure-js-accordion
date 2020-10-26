const env = process.env.NODE_ENV;
const entry = (() => {
    switch (env) {
        case 'production':
            return {'dist/pure-js-accordion': './src/ts/pure-js-accordion.ts',};
        case 'development':
            return {'sample/js/pure-js-accordion': './src/ts/pure-js-accordion.ts',};
        default :
            return 'development';
    }
})();
module.exports = {
    mode: env,
    entry,
    output: {
        filename: '[name].js',
        path: __dirname,
        library: 'PJSAccordion',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js',],
    },
};