<template>
  <div class="face">
    <span class="tips">请您将您的面部正对屏幕</span>
    <img src='../../../../src/assets/png/face.png'>
    <button>拍照</button>
  </div>
</template>
<script>
export default {
  
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
  button{
    margin-top: 15px;
    border-radius: 50%;
    background: #fff;
    width: 50px;
    height: 50px;
    font-size: 14px;
  }
}
</style>
