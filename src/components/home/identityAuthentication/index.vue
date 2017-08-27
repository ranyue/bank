<template>
    <div>
        <component :is="componentID"></component>
        <mt-button type="danger" size="large" @click.native="handleClick">下一步</mt-button>
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

</style>
