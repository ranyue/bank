<template>
    <div class="authorization">
        <div class="text-content">
            <span>浙江泰隆商业银行XXXX合同书</span>
            <span>浙江泰隆商业银行舟山分行：</span>
            <p>本人XXX（身份证XXXX），现向贵行申请贷款人民币XXXX元整，同时授权贵行在人民银行规定范围内，通过中国人民银行个人信用基础数据库查询、打印、保存本人个人基本信息和信用信息，并向个人信用信息基础数据库提供本人个人信息和信用信息。       <br>授权期限为本人签订授权书之日起至合同项下债务清偿完毕止。</p>
            <span>申请（授权）人： XXX</span>
            <span>申请（授权）日期：  年  月  日</span>
            <div>
                <mt-checklist title="复选框列表" v-model="value" :options="['本人已阅读以上条款']">
                </mt-checklist>
            </div>
        </div>
        <div class="code">
            <mt-field label="验证码：" placeholder="请输入验证码" type="number" v-model="licencePlateNum"></mt-field>
            <mt-button plain type="primary" @click.native="getCode">获取验证码</mt-button>
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
.authorization {
    .text-content {
        height: 256px;
        overflow: scroll;
        font-size: 16px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        line-height: 20px;
    }
    .mint-button {
        width: 86%;
    }
    .code {
        display: flex;
        align-items: center;
        >a {
            width: 60%;
        }
        >button.mint-button {

            width: 30%;
            font-size: 14px;
            height: 35px;
        }
    }
}
</style>
