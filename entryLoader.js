const VirtualModulesPlugin = require('webpack-virtual-modules');
const {EntryDependency} = require("@rspack/core");

module.exports = function (source) {
    const virtualModules = new VirtualModulesPlugin()
    if(!virtualModules._compiler){
        virtualModules.apply(this._compiler)
        virtualModules.writeModule('entry.js', `console.log('entry.js')`)
    }
    const dep = new EntryDependency('entry.js')
    this._compilation.addEntry('', dep, {name: 'entry'}, err => {
        if (err) {
            console.log(err)
        }
    })
    return source;
};

