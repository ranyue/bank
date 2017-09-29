<template>
  <div class="face">
    <span class="tips">请您将您的面部正对屏幕</span>
    <div class="photo" :style="'backgroundImage:url('+phone+')'" v-loading="loading" v-if="!canRealPhone">
      <button class="capture">拍照</button>
      <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="upload">
    </div>
    <div v-if="canRealPhone">
      <mt-button plain type="primary" @click.native="getMedia">开启摄像头</mt-button>
      <video height="120px" autoplay="autoplay"></video>
      <mt-button plain type="primary" @click.native="getPhoto">拍照</mt-button>
      <canvas id="canvas1" height="120px" width="200px"></canvas>
    </div>
    <mt-button plain type="primary" @click.native="handleClick" :disabled="loading">下一步</mt-button>
  </div>
</template>
<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      phone: '',
      loading: false,
      canRealPhone: true
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
        };
      };
    },
    getPhoto() {
      let video = document.querySelector('video');
      let canvas1 = document.querySelector('#canvas1')
      let context1 = canvas1.getContext('2d')
      context1.clearRect(0, 0, 200, 120)
      context1.drawImage(video, 0, 0, 200, 120)
      let base64 = canvas1.toDataURL('image/jpeg', 0.5)
      this.phone = base64
    },
    getMedia() {
      let video = document.querySelector('video');
      let canvas1 = document.querySelector('#canvas1')
      let context1 = canvas1.getContext('2d')
      let constraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: "user",
          frameRate: { ideal: 10, max: 15 }
        },
        audio: false
      }
      var promisifiedOldGUM = function(constraints) {
        // First get ahold of getUserMedia, if present
        var getUserMedia = (navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia);
        if (!getUserMedia) {
          return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      }
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = promisifiedOldGUM;
      }
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
          if ("srcObject" in video) {
            video.srcObject = stream
          } else {
            video.src = window.URL && window.URL.createObjectURL(stream) || stream
          }
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(err => {
          console.log(err);
          Toast({
            message: '设备不支持调取前置摄像头，可采用后置摄像头',
            duration: 1500
          });
          this.canRealPhone = false
        });
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
