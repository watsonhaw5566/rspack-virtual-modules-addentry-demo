import {defineConfig} from '@rspack/cli';
import VirtualModulesPlugin from 'webpack-virtual-modules';

const virtualModules = new VirtualModulesPlugin({
    'node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
    'node_modules/module-bar.js': 'module.exports = { bar: "bar" };'
})

export default defineConfig({
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: './entryLoader.js',
            },
        ],
    },
    plugins:[
        virtualModules,
    ],
    experiments: {
        useInputFileSystem: true,
    }
})
