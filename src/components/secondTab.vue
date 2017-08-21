<template>
    <div class="second-tab">
        <div v-for="(item, index) in msg" :key="index" >
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: [
                '点击提交身份证正面照片',
                '点击提交身份证反面照片'
            ]
        }

    }
}
</script>
<style lang="scss" scoped>
@import './../public/sass/common.scss';
.second-tab {
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
            background-image: url('../../src/assets/png/card.png');
        }
          &:nth-of-type(2){
            margin: pxToRem(30px) 0;
              background-image: url('../../src/assets/png/card.png');
            //  background-image: url('../../src/assets/png/card-column.png');
        }
    }
}
</style>
