<template>
    <div class="authorization">
        <div class="text-content">
            <span class="title">浙江泰隆商业银行XXXX合同书</span>
            <span class="header">浙江泰隆商业银行舟山分行：</span>
            <p>&nbsp;&nbsp;&nbsp;本人XXX（身份证XXXX），现向贵行申请贷款人民币XXXX元整，同时授权贵行在人民银行规定范围内，通过中国人民银行个人信用基础数据库查询、打印、保存本人个人基本信息和信用信息，并向个人信用信息基础数据库提供本人个人信息和信用信息。       <br>授权期限为本人签订授权书之日起至合同项下债务清偿完毕止。</p>
            <span>申请（授权）人： XXX</span>
            <span>申请（授权）日期：  年  月  日</span>
            <div>
                <mt-checklist  v-model="value" :options="['本人已阅读以上条款']">
                </mt-checklist>
            </div>
        </div>
        <div class="code">
            <mt-field label="手机号码" placeholder="请输入手机号码" v-model="licencePlateNum"></mt-field>
            <div class="get-code">
                <mt-field label="验证码：" placeholder="请输入验证码" type="number" v-model="licencePlateNum"></mt-field>
                <mt-button plain type="primary" @click.native="getCode">获取验证码</mt-button>
            </div>
        </div>
        <mt-button plain type="primary" @click.native="handleOver">完成</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mobile: '',
            readonly: true,
            value: [],
            licencePlateNum: ''
        }
    },
    methods: {
        getCode() {
            let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
            if (!myreg.test(this.mobile)) {
                return Toast({
                    message: '请输入正确的手机号码',
                    duration: 1500
                });
            }
            Service.sendMessage({ mobile: this.mobile })
                .then(res => {
                    if (res.data.errorCode == 0) {
                        Toast({
                            message: '发送验证码成功',
                            duration: 1500
                        })
                    } else {
                        Toast({
                            message: '发送验证码失败' + res.data.errorMsg,
                            duration: 1500
                        })
                    }
                })
                .catch(e => {
                    Toast({
                        message: '发送验证码失败' + e,
                        duration: 1500
                    })
                })
        },
        handleOver() {

        }
    }
}
</script>
<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
.authorization {
    .text-content {
        height: pxToRem(320px);
        overflow: scroll;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        font-family: SourceHanSansCN-Light;
        font-size: pxToRem(14px);
        color: #666666;
        letter-spacing: pxToRem(-0.34px);
        line-height: pxToRem(17px);
        margin: pxToRem(12px) pxToRem(20px) 0;
        .title {
            margin-bottom: pxToRem(10px);
        }
        .header {
            align-self: flex-start;
        }
        >p {
            margin-top: 0;
        }
    }
    .mint-button {
        width: pxToRem(301px);
        height: pxToRem(50px);
        margin-top: pxToRem(40px);
        margin-bottom: pxToRem(29px);
    }
    .code {
        display: flex;
        align-items: center;
        padding: pxToRem(10px);
        flex-direction: column;
       >a {
                width: 100%;
            }
        .get-code {
            display: flex;
             align-items: center;
            .mint-button {
                width: 30%;
                font-size: pxToRem(14px);
                height: pxToRem(35px);
                margin-top: 0;
                margin-bottom: 0;
            }
        }
    }
}
</style>
