<template>
  <div class="face">
    <span class="tips">请您将您的面部正对屏幕</span>
    <div class="photo" :style="'backgroundImage:url('+phone+')'" v-loading="loading">
      <button class="capture">拍照</button>
      <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="upload">
    </div>
    <mt-button plain type="primary" @click.native="handleClick" :disabled="loading">下一步</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
      loading: false
    }
  },
  methods: {
    handleClick() {
      this.$store.commit('to_next_step')
      this.$router.push('/home/bindInfo/index')
    },
    upload(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.drawOnCanvas(files[0])
    },
    drawOnCanvas(file) {
      let reader = new FileReader()
      let that = this
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        let dataURL = e.target.result,
          canvas = document.createElement('canvas'),
          ctx = canvas.getContext('2d'),
          img = new Image()
        img.src = dataURL
        img.style.backgroundSize = 'cover'
        img.onload = function() {
          let square = 390
          canvas.width = square
          canvas.height = square
          let context = canvas.getContext('2d')
          context.clearRect(0, 0, square, square)
          let imageWidth
          let imageHeight
          let offsetX = 0
          let offsetY = 0
          if (this.width > this.height) {
            imageWidth = Math.round(square * this.width / this.height)
            imageHeight = square
            offsetX = - Math.round((imageWidth - square) / 2)
          } else {
            imageHeight = Math.round(square * this.height / this.width)
            imageWidth = square
            offsetY = - Math.round((imageHeight - square) / 2)
          }
          context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight)
          let base64 = canvas.toDataURL('image/jpeg', 0.5)
          img.src = base64
          that.phone = base64
          // canvas.remove()
        };
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
.face {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: pxToRem(22px);
  .tips {
    font-size: pxToRem(18px);
    margin-bottom: pxToRem(20px);
    font-family: SourceHanSansCN-Light;
    color: #333333;
    letter-spacing: -0.44px;
  }
  .photo {
    width: pxToRem(340px);
    height: pxToRem(390px);
    position: relative; // background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    >input {
      width: pxToRem(65px);
      height: pxToRem(65px);
      border-radius: 50%;
      opacity: 0;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 100;
    }
  }
  .capture {
    border-radius: 50%;
    background: #fff;
    width: pxToRem(50px);
    height: pxToRem(50px);
    font-size: pxToRem(14px);
    width: pxToRem(62px);
    height: pxToRem(62px);
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #ccc;
  }
  .mint-button {
    width: pxToRem(301px);
    height: pxToRem(50px);
    margin-top: pxToRem(40px);
    margin-bottom: pxToRem(29px);
  }
}
</style>
