<template>
    <div class="bind-info">
        <mt-field label="姓名：" placeholder="请输入姓名" :readonly="readonly" v-model="cust_name"></mt-field>
        <mt-field label="银行卡号：" placeholder="请输入银行卡号" type="number" v-model="cardNo"></mt-field>
        <mt-field label="卡类型：" placeholder="卡类型" :readonly="readonly" v-model="serialNo"></mt-field>
        <mt-field label="预留手机号：" placeholder="请输入预留手机号" type="number" v-model="mobile"></mt-field>
        <div class="code">
            <mt-field label="验证码：" placeholder="请输入验证码" type="number" v-model="dynamicPwd"></mt-field>
            <mt-button plain type="primary" @click.native="getCode">获取验证码</mt-button>
        </div>
        <mt-button plain type="primary" @click.native="handleClick">下一步</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import Service from './../../../api/index.js'
export default {
    data() {
        return {
            licencePlateNum: '',
            readonly: true,
            cardNo: '',
            mobile: '',
            dynamicPwd: ''
        }
    },
    computed: {
        biz_sence_sno() {
            return this.$store.state.home.routeInfo.biz_sence_sno
        },
        serialNo() {
            return this.$store.state.bindInfo.serialNo
        },
        cust_name() {
            return this.$store.state.home.initialInfo.cust_name
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
        handleClick() {
            if (!this.dynamicPwd) {
                Toast({
                    message: '请输入短信验证码',
                    duration: 1500
                })
                return
            }
            if (!this.cardNo) {
                Toast({
                    message: '请输入银行卡号',
                    duration: 1500
                })
                return
            }
            this.$store.dispatch('verifyMsg', {
                code: {
                    dynamicPwd: this.dynamicPwd,
                    cardNo: this.cardNo
                },
                template: {
                    biz_sence_sno: this.biz_sence_sno,
                    templateType: 'CB0001',
                }
            })
            this.$router.push('authorization')
        }
    },
    watch: {
        cardNo: {
            handler: function(value) {
                if (value.trim().length == 19) {
                    this.$store.dispatch('getBankInfo', { cardNo: this.cardNo })
                }
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
.bind-info {
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
    >.mint-button {
        margin: 20px 0 20px 0;
        width: 86%;
    }
}
</style>

