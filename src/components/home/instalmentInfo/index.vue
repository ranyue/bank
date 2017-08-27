<template>
    <div>
        <component :is="componentId" @toNexT="handleToNext">
        </component>
    </div>
</template>

<script>
import baseInfo from './baseInfo.vue'
import calculate from './calculate.vue'
export default {
    data() {
        return {
            componentId: calculate
        }
    },
    methods: {
        handleToNext(paylod) {
            if(paylod.type === 'goBaseInfo'){
                this.componentId = baseInfo
            }
            if(paylod.type === 'goToNextSteps'){
                this.$emit('toNext')
            }
        }
    },
    components: {
        baseInfo,
        calculate
    }
}
</script>

<style lang="scss" scoped>
.mint-button {
    margin: 20px 0 20px 7%;
    width: 86%;
}
</style>
