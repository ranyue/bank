<template>
    <div class="IDupload">
        <div class="content" v-loading="loading">
            <div class="font">
                <button>
                    <i class="el-icon-plus"></i>
                    <span>
                        点击提交身份证背面照片
                    </span>
                    <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="uploadBack">
                </button>
                <div class="picture" :style="'backgroundImage:url('+conPhoto+')'"></div>
            </div>
            <div class="back">
                <button>
                    <i class="el-icon-plus"></i>
                    <span>
                        点击提交身份证正面面照片
                    </span>
                    <input type="file" @change="uploadFont" capture="camera" accept="image/jpeg,image/jpg,image/png">
                </button>
                <div class="picture" :style="'backgroundImage:url('+frontPhoto+')'"></div>
            </div>
        </div>
        <mt-button plain type="primary" @click.native="handleClick" :disabled="loading">下一步</mt-button>
    </div>
</template>
<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            frontPhoto: '',	// 身份证正面照片
            conPhoto: '', //	身份证反面照片
            ocr_mode: '', //	业务类型
            biz_name: '小鱼bank',//	业务名
            ocr_type: '1', //	证件类型
            type: undefined,
            loading: false
        }
    },
    computed: {
        biz_sence_sno() {
            return this.$store.state.home.routeInfo.biz_sence_sno
        }
    },
    methods: {
        // postImg() {
        //     if (!this.frontPhoto) {
        //         this.loading = false
        //         return Toast({
        //             message: '请上传正面照片',
        //             duration: 1500
        //         });
        //     }
        //     if (!this.conPhoto) {
        //         this.loading = false
        //         return Toast({
        //             message: '请上传反面照片',
        //             duration: 1500
        //         });
        //     }
        //     this.$store.dispatch('addImageInfo', {
        //         font: {
        //             frontPhoto: this.frontPhoto,	// 身份证正面照片
        //             ocr_mode: '1', //	业务类型
        //             biz_name: '小鱼bank',//	业务名
        //             ocr_type: '1', //	证件类型
        //         },
        //         back: {
        //             conPhoto: this.conPhoto, //	身份证反面照片
        //             ocr_mode: '2', //	业务类型
        //             biz_name: '小鱼bank',//	业务名
        //             ocr_type: '1', //	证件类型
        //         }
        //     }).then(res => {
        //         if (res.ok) {
        //             this.loading = false
        //         }
        //     })
        // },
        handleClick() {
            this.$router.push('IDInfo')
        },
        uploadBack(e) {
            this.type = 'back'
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.drawOnCanvas(files[0])
        },
        uploadFont(e) {
            this.type = 'font'
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.drawOnCanvas(files[0])
        },
        drawOnCanvas(file) {
            let reader = new FileReader();
            let that = this
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                let dataURL = e.target.result,
                    canvas = document.createElement('canvas'),
                    ctx = canvas.getContext('2d'),
                    img = new Image();
                img.src = dataURL;
                img.style.backgroundSize = 'cover'
                img.onload = function() {
                    let square = 266;
                    canvas.width = square;
                    canvas.height = square;
                    let context = canvas.getContext('2d');
                    context.clearRect(0, 0, square, square);
                    let imageWidth;
                    let imageHeight;
                    let offsetX = 0;
                    let offsetY = 0;
                    if (this.width > this.height) {
                        imageWidth = Math.round(square * this.width / this.height);
                        imageHeight = square;
                        offsetX = - Math.round((imageWidth - square) / 2);
                    } else {
                        imageHeight = Math.round(square * this.height / this.width);
                        imageWidth = square;
                        offsetY = - Math.round((imageHeight - square) / 2);
                    }
                    context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight);
                    let base64 = canvas.toDataURL('image/jpeg', 0.5);
                    if (that.type === 'back') {
                        that.conPhoto = base64;
                    } else {
                        that.frontPhoto = base64
                    }
                    // document.body.appendChild(canvas)
                    // canvas.remove()
                };
            };
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
    .content {
        margin-top: pxToRem(20px);
        >div {
            width: pxToRem(266px);
            height: pxToRem(145px);
            background-image: linear-gradient(-90deg, #CFE2ED 0%, #F1E6E6 51%, #F0E6E6 53%, #CFDEE1 99%);
            border: 3px solid #FFFFFF;
            border-radius: 6px;
            margin-bottom: pxToRem(20px);
            position: relative;
            >button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: pxToRem(100px);
                height: pxToRem(100px);
                border-radius: 50%;
                background: rgba(208, 1, 27, 0.80);
                box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.41);
                border: none;
                z-index: 100;
                >span {
                    font-family: SourceHanSansCN-Light;
                    font-size: pxToRem(14px);
                    color: #FFFFFF;
                    letter-spacing: -0.34px;
                }
                >i {
                    color: #fff;
                    font-size: pxToRem(20px);
                }
                >input {
                    position: absolute;
                    width: 110%;
                    height: 110%;
                    border-radius: 50%;
                    opacity: 0;
                    z-index: 100;
                }
            }
            >div {
                width: pxToRem(266px);
                height: pxToRem(145px);
                overflow: hidden;
                position: absolute;
                border: 1px solid #d5d5d5; // overflow: hidden;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: auto;
            }
        }
    }

    .mint-button {
        width: pxToRem(301px);
        height: pxToRem(50px);
        margin-top: pxToRem(20px);
        margin-bottom: pxToRem(29px);
    }
}
</style>