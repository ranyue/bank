<template>
    <div class="indentify">
        <component :is="componentID"></component>
        <mt-button  plain type="primary"  @click.native="handleClick">下一步</mt-button>
    </div>
</template>
<script>
import IDinfo from './IDinfo.vue'
import IDUpload from './IDUpload.vue'
import faceIdentify from './faceIndentify.vue'

export default {
    data(){
        return {
            componentID: IDUpload
        }
    },
    computed: {
        fontInfo() {
            return this.$store.state.identifyInfo.fontInfo
        },
        backInfo() {
             return this.$store.state.identifyInfo.backInfo
        }
    },
    methods: {
        handleClick() {
            if(this.componentID == IDUpload){
                this.componentID = IDinfo
                return
            }
            if(this.componentID == IDinfo){
                // let params = Object.assign({},this.fontInfo,this.backInfo)
                // params.error_no = undefined
                // params.error_info = undefined
                // this.$store.dispatch('updateClientInfo',params)
                // .then(res => {
                //     if(res.ok){
                //         this.componentID = faceIdentify
                //     }
                // })
                this.componentID = faceIdentify
                return
            }
            if(this.componentID == faceIdentify){
                this.$emit('toNext')
            }
        }
    },
    components: {
        IDinfo,
        IDUpload,
        faceIdentify
    }
}
</script>

<style lang="scss" scoped>
.indentify{
    .mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}
}
</style>
