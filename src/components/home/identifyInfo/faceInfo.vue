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
.face{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  .tips{
    font-size: 16px;
    margin-bottom: 15px;
  }
  .capture{
    margin-top: 15px;
    border-radius: 50%;
    background: #fff;
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
    .mint-button {
        margin: 20px 0 20px 0;
        width: 86%;
    }
}
</style>
