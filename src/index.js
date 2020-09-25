import Button from './components/button';
import Icon from './components/icon';

const components = {
    Button,
    Icon
}

const dView = {
    ...components,
    dButton: Button
}

const install = function(Vue, opts = {}) {
    if (install.installed) return

    console.debug(opts)

    Object.keys(dView).forEach(key => {
        Vue.component(key, dView[key])
    })

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    version: process.env.VERSION,
    install,
    ...components
}

module.exports.default = module.exports = API
