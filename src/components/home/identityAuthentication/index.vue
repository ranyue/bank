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
    methods: {
        handleClick() {
            if(this.componentID == IDUpload){
                this.componentID = IDinfo
                return
            }
            if(this.componentID == IDinfo){
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
