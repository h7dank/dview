import Vue from 'vue/dist/vue.common.dev'
import dView from '../src/index'

Vue.use(dView)

let id = 0

export const createElm = function () {
    const elm = document.createElement('div')
    elm.id = 'app' + ++id
    document.body.append(elm)
    return elm
}

export const destroyVM = function (vm) {
    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el)
}

export const createVue = function(Compo, mounted = false) {
    const elm = createElm()

    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo }
    }
    return new Vue(Compo).$mount(mounted === false ? null : elm)
}

export const createTest = function (Compo, propsData = {}, mounted = false) {
    if (propsData === true || propsData === false) {
        mounted = propsData
        propsData = {}
    }
    const elm = createElm()
    const Ctor = Vue.extend(Compo)
    return new Ctor({ propsData }).$mount(mounted === false ? null : elm)
}