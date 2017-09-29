<template>
    <div class="calculate">
        <mt-field label="车牌号" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="initialInfo.rspData.sence_json.vehicle_num"></mt-field>
        <mt-field label="车架号" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="initialInfo.rspData.sence_json.vehicle_identifiy"></mt-field>
        <mt-field label="姓名" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="initialInfo.rspData.cust_name"></mt-field>
        <mt-field label="身份证号" placeholder="输入身份证后六位" v-model="IDnumber"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号码" type="tel" v-model="initialInfo.rspData.mobile"></mt-field>
        <mt-field label="保单金额" :readonly="readonly" class="orange" v-model="initialInfo.rspData.sence_json.insure_fee"></mt-field>
        <mt-radio title="选择期数" v-model="value" :options="options"></mt-radio>
        <mt-field label="首付金额" :readonly="readonly" class="orange" v-model="firstPayMoney"></mt-field>
        <mt-field label="每月还款金额" :readonly="readonly" class="orange" v-model="perPayMoney"></mt-field>
        <mt-button plain type="primary" @click.native="handleClick">下一步</mt-button>
    </div>
</template>

<script>
import Service from './../../../api/index.js'
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            readonly: true,
            username: '',
            mobile: '',
            birthday: '',
            vehicleNum: '',
            licencePlateNum: '',
            IDnumber: '',
            InsuranceAmount: '',
            value: '3',
            options: [
                {
                    label: '3期',
                    value: '3'
                },
                {
                    label: '6期',
                    value: '6'
                },
                {
                    label: '9期',
                    value: '9'
                },
                {
                    label: '12期',
                    value: '12'
                },
            ]
        }
    },
    computed: {
        firstPayMoney() {
            return parseFloat(this.initialInfo.rspData.sence_json.insure_fee) * parseFloat(this.initialInfo.rspData.sence_json.ratio).toFixed(2)
        },
        perPayMoney: {
            get: function() {
                return (parseFloat(this.initialInfo.rspData.sence_json.insure_fee) - this.firstPayMoney) / parseFloat(this.value)
            },
            set: function(newValue) {
            }
        },
        initialInfo: {
            get() {
                return this.$store.state.home.initialInfo
            },
            set(value) {
                this.$store.commit('update_initial_info', value)
            }
        },
        routeInfo() {
            return this.$store.state.home.routeInfo
        },
        paramsObj() {
            return this.$store.state.home.paramsObj
        }
    },
    methods: {
        handleClick() {
            // let length = this.initialInfo.rspData.cus_card_sno.length
            // if(this.IDnumber != this.initialInfo.rspData.cus_card_sno.substring(length - 6)){
            //     return Toast({
            //         message: '身份证号码不匹配',
            //         duration: 1500
            //     });
            // }
            //  if(!(/^1[34578]\d{9}$/.test(this.initialInfo.rspData.mobile))){ 
            //    return Toast({
            //         message: '手机号码有误',
            //         duration: 1500
            //     });
            // } 
            // let params = {
            //     appAccessToken: this.routeInfo.appAccessToken,
            //     appID: this.routeInfo.appID,
            //     encryptMethod: "NONE",
            //     reqData: {
            //         sno: this.paramsObj.sno,
            //         original: this.paramsObj.original,
            //         biz_sence_sno:this.routeInfo.biz_sence_sno,
            //         mobile: this.mobile,
            //         payment_mon: this.value,
            //         down_payment: this.firstPayMoney,
            //     },
            //     seqNO: this.paramsObj.sno
            // }
            // this.$store.dispatch('instl_periods')
            // .then(res => {
            //      this.$router.push('baseInfo')
            // })
            this.$router.push('baseInfo')
        }
    },
    created() {
        let routeDate = this.$route.query
        this.$store.commit('save_route_info', routeDate)
        this.$store.dispatch('get_client_info', {
            appAccessToken: this.routeInfo.appAccessToken,
            appID: this.routeInfo.appID,
            encryptMethod: "NONE",
            reqData: {
                sno: this.paramsObj.sno,
                original: this.paramsObj.original,
                biz_sence_sno: this.routeInfo.biz_sence_sno
            },
            seqNO: this.paramsObj.sno
        })

    }
}
</script>
<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
   .mint-button {
        width: pxToRem(301px);
        height: pxToRem(50px);
        margin-top: pxToRem(40px);
        margin-bottom: pxToRem(29px);
    }
.calculate{
    padding:  0 pxToRem(10px);
}
</style>

