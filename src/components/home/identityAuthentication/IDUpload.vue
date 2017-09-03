<template>
    <div class="IDupload">
        <div v-for="(item, index) in msg" :key="index" >
            <span >{{item}}</span>
        </div>
        
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            msg: [
                '点击提交身份证正面照片',
                '点击提交身份证反面照片'
            ],
            frontPhoto: '',	// 身份证正面照片
            conPhoto: '', //	身份证反面照片
            ocr_mode: '', //	业务类型
            biz_name: '小鱼bank' ,//	业务名
            ocr_type: '1', //	证件类型
        }
    },
    computed: {
        biz_sence_sno() {
            return this.$store.state.home.routeInfo.biz_sence_sno
        }
    },
    methods: {
        uploadPic() {
            if(!this.frontPhoto){
                  return Toast({
                    message: '请上传正面照片',
                    duration: 1500
                });
            }
             if(!this.conPhoto){
                  return Toast({
                    message: '请上传反面照片',
                    duration: 1500
                });
            }
            this.store.dispatch('uploadPic', {
                font: {
                    frontPhoto: this.frontPhoto,	// 身份证正面照片
                    ocr_mode: '1', //	业务类型
                    biz_name: '小鱼bank' ,//	业务名
                    ocr_type: '1', //	证件类型
                },
                back: {
                    conPhoto: this.conPhoto, //	身份证反面照片
                    ocr_mode: '2', //	业务类型
                    biz_name: '小鱼bank' ,//	业务名
                    ocr_type: '1', //	证件类型
                }
            })
        }
    }

}
</script>
<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
.IDupload {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    >div {
        display: flex;
        align-items: center;
        justify-content: center;
        left: pxToRem(155px);
        top: pxToRem(312px);
        width: pxToRem(191px);
        height: pxToRem(103px);
            background-size: contain;
        >span {
            font-size: pxToRem(13px)
        }
        &:nth-of-type(1){
            margin-top: pxToRem(30px);
            background-image: url('../../../../src/assets/png/card.png');
        }
          &:nth-of-type(2){
            margin: pxToRem(30px) 0;
              background-image: url('../../../../src/assets/png/card.png');
            //  background-image: url('../../src/assets/png/card-column.png');
        }
    }
}
</style>
