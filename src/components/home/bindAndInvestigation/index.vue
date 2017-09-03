<template>
    <div class="bind">
        <component :is="componentID" ></component>
        <showDetail v-show="isShowDetail" ></showDetail>
        <mt-button  plain type="primary"  @click.native="handleClick" v-show="!isShowDetail">下一步</mt-button>
    </div>
</template>
<script>
import bindInfo from './bindInfo.vue'
import authorization from './authorization.vue'
import detail from './detail.vue'
import showDetail from './showDetail.vue'
export default {
    data(){
        return {
            componentID: bindInfo
        }
    },
    methods: {
        handleClick() {
            if(this.componentID == bindInfo){
                this.componentID = authorization
                return
            }
            if(this.componentID == authorization){
                this.componentID = detail
                return
            }
            if(this.componentID == detail){
                this.$emit('toNext')
            }
        }
    },
    computed: {
        isShowDetail() {
            return this.$store.state.bindInfo.isShowDetail
        }
    },
    components: {
        authorization,
        bindInfo,
        detail,
        showDetail
    }
}
</script>

<style lang="scss" scoped>
.bind{
    .mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}
}
</style>
