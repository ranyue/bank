<template>
  <div class="face">
    <span class="tips">请您将您的面部正对屏幕</span>
    <img src='../../../../src/assets/png/face.png'>
    <button class="capture">拍照</button>
    <mt-button  plain type="primary"  @click.native="handleClick">下一步</mt-button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit('to_next_step')
      this.$router.push('/home/bindInfo/index')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
.face{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: pxToRem(20px);
  .tips{
    font-size: pxToRem(16px);
    margin-bottom: pxToRem(15px);
  }
  .capture{
    margin-top: pxToRem(15px);
    border-radius: 50%;
    background: #fff;
    width: pxToRem(50px);
    height: pxToRem(50px);
    font-size: pxToRem(14px);
  }
 .mint-button {
        width: pxToRem(301px);
        height: pxToRem(50px);
        margin-top: pxToRem(40px);
        margin-bottom: pxToRem(29px);
    }
}
</style>
