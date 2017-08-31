<template>
    <div class="calculate">
        <mt-field label="车牌号" placeholder="脱敏(不可修改)" type="number" :readonly="readonly" v-model="licencePlateNum"></mt-field>
        <mt-field label="车架号" placeholder="脱敏(不可修改)" type="number" :readonly="readonly" v-model="initialInfo.sence_json.carProductNo"></mt-field>
        <mt-field label="姓名" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="initialInfo.cust_name"></mt-field>
        <mt-field label="身份证号" placeholder="输入身份证后六位" v-model="IDnumber"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号码" type="tel" v-model="initialInfo.mobile"></mt-field>
        <mt-field label="保单金额" :readonly="readonly" type="number" v-model="initialInfo.sence_json.applyAmt"></mt-field>
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
            ]
        }
    },
    computed: {
        firstPayMoney() {
            return parseFloat(this.initialInfo.sence_json.applyAmt) * parseFloat(this.initialInfo.sence_json.ratio).toFixed(2)
        },
        perPayMoney: {
            get: function() {
                return (parseFloat(this.initialInfo.sence_json.applyAmt) - this.firstPayMoney) / parseFloat(this.value)
            },
            set: function (newValue) {
            }
        },
        initialInfo: {
            get () {
                return this.$store.state.home.initialInfo
            },
            set (value){
                this.$store.commit('update_initial_info',value)
            }
        },
        routeDate() {
            return this.$store.state.home.routeDate
        }
    },
    methods: {
        handleClick() {
            // let length = this.initialInfo.cus_card_sno.length
            // if(this.IDnumber != this.initialInfo.cus_card_sno.substring(length - 6)){
            //     return Toast({
            //         message: '身份证号码不匹配',
            //         duration: 1500
            //     });
            // }
            //  if(!(/^1[34578]\d{9}$/.test(this.initialInfo.mobile))){ 
            //    return Toast({
            //         message: '手机号码有误',
            //         duration: 1500
            //     });
            // } 
            // let params = {
            //     biz_sence_sno: '',
            //     mobile: this.initialInfo.mobile,
            //     payment_mon: this.value,
            //     down_payment: this.firstPayMoney,
            // }
            // this.$store.dispatch('instl_periods')
            // .then(res => {
            //      this.$emit('toNexT',{
            //         type: 'goBaseInfo'
            //     })
            // })

             this.$emit('toNexT',{
                    type: 'goBaseInfo'
                })
        }
    },
    created() {      
        let routeDate = this.$route.query
        let defaultQuery = {
            biz_sence_sno: '就送123456', // 业务编号
            appAccessToken: '1211212', // token
            appID: '11111'
        }
        if(!routeDate.appID){
            routeDate = defaultQuery
        }
        this.$store.commit('save_route_info', routeDate)
        this.$store.dispatch('get_client_info',{
            biz_sence_sno: routeDate.biz_sence_sno
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

