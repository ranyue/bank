<template>
    <div class="calculate">
        <mt-field label="车牌号" placeholder="脱敏(不可修改)" type="number" :readonly="readonly" v-model="licencePlateNum"></mt-field>
        <mt-field label="车架号" placeholder="脱敏(不可修改)" type="number" :readonly="readonly" v-model="initialDate.sence_json.carProductNo"></mt-field>
        <mt-field label="姓名" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="initialDate.cust_name"></mt-field>
        <mt-field label="身份证号" placeholder="输入身份证后六位" v-model="IDnumber"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号码" type="tel" v-model="initialDate.mobile"></mt-field>
        <mt-field label="保单金额" :readonly="readonly" type="number" v-model="initialDate.sence_json.applyAmt"></mt-field>
        <mt-radio title="选择期数" v-model="value" :options="options"></mt-radio>
        <mt-field label="首付金额" :readonly="readonly" type="number" v-model="firstPayMoney"></mt-field>
        <mt-field label="每月还款金额" :readonly="readonly" type="number" v-model="perPayMoney"></mt-field>
        <mt-button  plain type="primary"  @click.native="handleClick">下一步</mt-button>
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
            ],
            initialDate: {
                cust_name: '',
                cust_card_type: '1',
                cus_card_sno: '',
                mobile: '',
                sence_json: {
                    carProductNo: '', // 车架号
                    applyAmt: '', // 保费金额
                    ratio: '' // 首付比例
                }
            }
        }
    },
    computed: {
        firstPayMoney() {
            console.log(parseFloat(this.$store.state.home.initalInfo.sence_json.applyAmt), parseFloat(this.$store.state.home.initalInfo.sence_json.ratio))
            return parseFloat(this.$store.state.home.initalInfo.sence_json.applyAmt) * parseFloat(this.$store.state.home.initalInfo.sence_json.ratio)
        },
        perPayMoney: {
            get: function() {
                return (parseFloat(this.$store.state.home.initalInfo.sence_json.applyAmt) - this.firstPayMoney) / parseFloat(this.value)
            },
            set: function (newValue) {
            }
        }
    },
    methods: {
        handleClick() {
            let length = this.initialDate.cus_card_sno.length
            if(this.IDnumber != this.initialDate.cus_card_sno.substring(length - 6)){
                return Toast({
                    message: '身份证号码不匹配',
                    duration: 1500
                });
            }
             if(!(/^1[34578]\d{9}$/.test(this.initialDate.mobile))){ 
               return Toast({
                    message: '手机号码有误',
                    duration: 1500
                });
            } 
            let params = {
                original: '',
                biz_sence_sno: '',
                mobile: this.initialDate.mobile,
                payment_mon: this.value,
                down_payment: this.firstPayMoney,
                sno: this.sno
            }
            this.$emit('toNexT',{
                type: 'goBaseInfo'
            })
            // Service.instlPeriods(params)
            // .then(res => {

            // })
            // .catch(e => {

            // })
        }
    },
    created() {      
        this.routeDate = this.$route.query
        let defaultQuery = {
            biz_sence_sno: '就送123456', // 业务编号
            appAccessToken: '1211212', // token
            appID: '11111'
        }
        if(!this.routeDate.appID){
            this.routeDate = defaultQuery
        }
        this.$store.commit('save_route_info', this.routeDate)
        this.$store.dispatch('get_client_info',{
            biz_sence_sno: this.routeDate.biz_sence_sno
        })
    }
}
</script>
<style lang="scss" scoped>
.mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}
</style>

