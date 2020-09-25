<template> 
    <component :disabled="disabled" :class="classes" :is="tagName">
        <icon class="dvu-load-loop" type="loading" v-if="loading"></icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </component>
</template>
<script>
import { oneOf } from '@/utils/assist'
import Icon from '@/components/icon/icon';

const prefixCls = 'dvu-btn'

export default {
    name: 'Button',
    components: {
        Icon
    },
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'])
            },
            default: 'default'
        },
        shape: {
            validator (value) {
                return oneOf(value, ['circle', 'circle-outline'])
            }
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'default'])
            }
        },
        disabled: Boolean,
        loading: Boolean
    },
    data() {
        return {
            showSlot: true
        }
    },
    computed: {
        tagName() {
            return 'button'
        },
        classes() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-loading`]: this.loading != null & this.loading
                }
            ]
        }
    },
    mounted() {
        this.showSlot = this.$slots.default !== undefined
    }
}
</script>