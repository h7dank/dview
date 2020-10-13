import { createVue, destroyVM } from '../../utils'

describe('Button.vue', () => {
    let vm

    afterEach(() => {
        destroyVM(vm)
    })

    it('should render as <button>', () => {
        vm = createVue(`<Button>dview</Button>`)
        expect(vm.$el.tagName).toEqual('BUTTON')
    })

    it('should has primary type', () => {
        vm = createVue(`<Button type="primary">Primary</Button>`)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn')).not.toBe(-1)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn-primary')).not.toBe(-1)
    })

    it('should has info type', () => {
        vm = createVue(`<Button type="info">Primary</Button>`)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn')).not.toBe(-1)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn-info')).not.toBe(-1)
    })

    it('should has success type', () => {
        vm = createVue(`<Button type="success">Primary</Button>`)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn')).not.toBe(-1)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn-success')).not.toBe(-1)
    })

    it('should has error type', () => {
        vm = createVue(`<Button type="error">Primary</Button>`)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn')).not.toBe(-1)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn-error')).not.toBe(-1)
    })

    it('should has warning type', () => {
        vm = createVue(`<Button type="warning">Primary</Button>`)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn')).not.toBe(-1)
        expect(Array.from(vm.$el.classList).indexOf('dvu-btn-warning')).not.toBe(-1)
    })

})