const VirtualModulesPlugin = require('webpack-virtual-modules');
const {EntryDependency} = require("@rspack/core");
module.exports = function (source) {
    new VirtualModulesPlugin({
        'entry.js': `console.log('entry.js')`
    })
    const dep = new EntryDependency('entry.js')
    this._compilation.addEntry('', dep, {name: 'entry'}, err => {
        if (err) {
            console.log(err)
        }
    })
    return source;
};

