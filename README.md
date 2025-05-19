# rspack-virtual-modules-addentry-demo

用于反馈 rspack 在 自定义 loader 中加入虚拟路径的入口文件会显示找不到该文件

主要 loader 逻辑如下

```js
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
```

