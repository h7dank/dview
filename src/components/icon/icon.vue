<template>
    <i :style="style" :class="classes"></i>
</template>
<script>
const prefixCls = 'dvu-icon'
export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: [Number, String],
        color: String
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.type}`]: this.type !== '',
                }
            ]
        },
        styles () {
            let style = {}
            
            if (this.size) {
                style['font-size'] = `${this.size}px`
            }

            if (this.color) {
                style.color = this.color
            }

            return style
        }
    }
}
</script>