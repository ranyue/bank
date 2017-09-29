<template>
    <div class="account">
        <div class="card-info">
            <span>泰隆银行储蓄卡</span>
            <span>123123123123123123
            </span>
        </div>
        <div class="detail">
            <span>还款详情</span>
            <ul>
                <li v-for="(item, index) in repayplanList" :key="index">
                    <span>{{item.repay_period}}</span>
                    <div>
                        <div>
                            <span>{{item.repay_date}}</span>
                            <span class="text-dec">还款日期</span>
                        </div>
                        <div>
                            <span>{{item.repay_sum}}</span>
                            <span class="text-dec">还款金额</span>
                        </div>
                        <!-- <div class="status">
                            <span :class="item.isRepay? 'success' : ''">{{item.isRepay ? '已还': '未还'}}</span>
                            <span class="text-dec">还款状态</span>
                        </div> -->
                    </div>

                </li>
            </ul>
        </div>
        <mt-button plain type="primary" @click.native="handleClick">确认还款</mt-button>
    </div>
</template>
<script>
export default {
    computed: {
        initialInfo: function() {
            return this.$store.state.home.initialInfo
        },
        biz_sence_sno() {
            return this.$store.state.home.routeInfo.biz_sence_sno
        },
        repayplanList() {
            return this.$store.state.account.repayplanList
        }
    },
    methods: {
        handleClick() {

        }
    },
    created: function() {
        let params = {
            clientID: this.initialInfo.rspData.cus_card_sno,
            clientName: this.initialInfo.rspData.cust_name,
            businessNo: this.biz_sence_sno
        }
        this.$store.dispatch('getRepayInfo')
    }
}
</script>
<style lang="scss" scoped>
@import './../../public/sass/common.scss';
.account {
    font-size: pxToRem(16px);
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .card-info {
        width: pxToRem(320px);
        height: pxToRem(100px);
        color: #fff;
        font-size: pxToRem(18px);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        margin: pxToRem(20px);
        background: #FD5F5F;
        border-radius: pxToRem(6px) 0px pxToRem(6px) pxToRem(6px) pxToRem(6px);
        >span {
            margin-top: pxToRem(15px);
            display: inline-block;
        }
    }
    .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: pxToRem(20px);
        span {
            margin-bottom: pxToRem(10px);
        }
        ul {
            li {
                background-color: #fff;
                width: pxToRem(320px);
                display: flex;
                flex-direction: column;
                margin-bottom: pxToRem(10px);
                padding-top: pxToRem(10px);
                >span {
                    align-self: flex-start;
                    margin-left: pxToRem(10px);
                }
                >div {
                    display: flex;
                    justify-content: space-around;
                    >div {
                        display: flex;
                        flex-direction: column;
                        >span.text-dec {
                            font-size: pxToRem(12px);
                        }
                    }
                    .status {
                        >span {
                            &:nth-of-type(1) {
                                border-radius: pxToRem(5px);
                                background-color: darkgray;
                            }
                            &.success {
                                background-color: #13CE66;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
