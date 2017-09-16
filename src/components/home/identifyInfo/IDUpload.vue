<template>
    <div class="IDupload">
        <div class="content">
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
        <mt-button plain type="primary" @click.native="handleClick">下一步</mt-button>
    </div>
</template>
<script>
import Exif from 'exif-js'
import { Toast, MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            frontPhoto: '',	// 身份证正面照片
            conPhoto: '', //	身份证反面照片
            ocr_mode: '', //	业务类型
            biz_name: '小鱼bank',//	业务名
            ocr_type: '1', //	证件类型
            picValue: '',
            type: undefined

        }
    },
    computed: {
        biz_sence_sno() {
            return this.$store.state.home.routeInfo.biz_sence_sno
        }
    },
    methods: {
        postImg() {
            if (!this.frontPhoto) {
                return Toast({
                    message: '请上传正面照片',
                    duration: 1500
                });
            }
            if (!this.conPhoto) {
                return Toast({
                    message: '请上传反面照片',
                    duration: 1500
                });
            }
            this.$store.dispatch('addImageInfo', {
                font: {
                    frontPhoto: this.frontPhoto,	// 身份证正面照片
                    ocr_mode: '1', //	业务类型
                    biz_name: '小鱼bank',//	业务名
                    ocr_type: '1', //	证件类型
                },
                back: {
                    conPhoto: this.conPhoto, //	身份证反面照片
                    ocr_mode: '2', //	业务类型
                    biz_name: '小鱼bank',//	业务名
                    ocr_type: '1', //	证件类型
                }
            })
        },
        handleClick() {
            this.$router.push('IDInfo')
        },
        uploadBack(e) {
            this.type = 'back'
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.picValue = files[0];
            this.imgPreview(this.picValue);
        },
        uploadFont(e) {
            this.type = 'font'
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.picValue = files[0];
            this.imgPreview(this.picValue);
        },
        imgPreview(file) {
            let self = this;
            let Orientation;
            //去获取拍照时的信息，解决拍出来的照片旋转问题  
            Exif.getData(file, function() {
                Orientation = Exif.getTag(this, 'Orientation');
            });
            // 看支持不支持FileReader  
            if (!file || !window.FileReader) return;

            if (/^image/.test(file.type)) {
                // 创建一个reader  
                let reader = new FileReader();
                // 将图片2将转成 base64 格式  
                reader.readAsDataURL(file);
                // 读取成功后的回调  
                reader.onloadend = function() {
                    let result = this.result;
                    let img = new Image();
                    img.src = result;
                    //判断图片是否大于100K,是就直接上传，反之压缩图片  
                    if (this.result.length <= (100 * 1024)) {
                        if (self.type === 'back') {
                            self.conPhoto = this.result;
                        } else {
                            self.frontPhoto = this.result
                        }
                        self.postImg();
                    } else {
                        img.onload = function() {
                            let data = self.compress(img, Orientation);
                            if (self.type === 'back') {
                                self.conPhoto = data;
                            } else {
                                self.frontPhoto = data
                            }
                            self.postImg();
                        }
                    }
                }
            }
        },
        // postImg() {
        //     //这里写接口  
        // },
        rotateImg(img, direction, canvas) {
            //最小与最大旋转方向，图片旋转4次后回到原方向      
            const min_step = 0;
            const max_step = 3;
            if (img == null) return;
            //img的高度和宽度不能在img元素隐藏后获取，否则会出错      
            let height = img.height;
            let width = img.width;
            let step = 2;
            if (step == null) {
                step = min_step;
            }
            if (direction == 'right') {
                step++;
                //旋转到原位置，即超过最大值      
                step > max_step && (step = min_step);
            } else {
                step--;
                step < min_step && (step = max_step);
            }
            //旋转角度以弧度值为参数      
            let degree = step * 90 * Math.PI / 180;
            let ctx = canvas.getContext('2d');
            switch (step) {
                case 0:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0);
                    break;
                case 1:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, 0, -height);
                    break;
                case 2:
                    canvas.width = width;
                    canvas.height = height;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, -height);
                    break;
                case 3:
                    canvas.width = height;
                    canvas.height = width;
                    ctx.rotate(degree);
                    ctx.drawImage(img, -width, 0);
                    break;
            }
        },
        compress(img, Orientation) {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext('2d');
            //瓦片canvas  
            let tCanvas = document.createElement("canvas");
            let tctx = tCanvas.getContext("2d");
            let initSize = img.src.length;
            let width = img.width;
            let height = img.height;
            //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
            let ratio;
            if ((ratio = width * height / 4000000) > 1) {
                console.log("大于400万像素")
                ratio = Math.sqrt(ratio);
                width /= ratio;
                height /= ratio;
            } else {
                ratio = 1;
            }
            canvas.width = width;
            canvas.height = height;
            //        铺底色  
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //如果图片像素大于100万则使用瓦片绘制  
            let count;
            if ((count = width * height / 1000000) > 1) {
                console.log("超过100W像素");
                count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片  
                //            计算每块瓦片的宽和高  
                let nw = ~~(width / count);
                let nh = ~~(height / count);
                tCanvas.width = nw;
                tCanvas.height = nh;
                for (let i = 0; i < count; i++) {
                    for (let j = 0; j < count; j++) {
                        tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                        ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                    }
                }
            } else {
                ctx.drawImage(img, 0, 0, width, height);
            }
            //修复ios上传图片的时候 被旋转的问题  
            if (Orientation != "" && Orientation != 1) {
                switch (Orientation) {
                    case 6://需要顺时针（向左）90度旋转  
                        this.rotateImg(img, 'left', canvas);
                        break;
                    case 8://需要逆时针（向右）90度旋转  
                        this.rotateImg(img, 'right', canvas);
                        break;
                    case 3://需要180度旋转  
                        this.rotateImg(img, 'right', canvas);//转两次  
                        this.rotateImg(img, 'right', canvas);
                        break;
                }
            }
            //进行最小压缩  
            let ndata = canvas.toDataURL('image/jpeg', 0.1);
            console.log('压缩前：' + initSize);
            console.log('压缩后：' + ndata.length);
            console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
            tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
            return ndata;
        },

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
                    width: 100%;
                    height: 100%;
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
                background-size: cover;
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