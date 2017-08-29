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
                <li v-for="(item, index) in info" :key="index">
                    <span>{{item.times}}</span>
                    <div>
                        <div>
                            <span>{{item.date}}</span>
                            <span class="text-dec">还款日期</span>
                        </div>
                        <div>
                            <span>{{item.amount}}</span>
                            <span class="text-dec">还款金额</span>
                        </div>
                        <div class="status">
                            <span :class="item.isRepay? 'success' : ''">{{item.isRepay ? '已还': '未还'}}</span>
                            <span class="text-dec">还款状态</span>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
          <mt-button plain type="primary" @click.native="handleClick">确认还款</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: [
                {
                    times: '第一期',
                    date: '2017.8.12',
                    amount: '2500元',
                    isRepay: true,
                },
                {
                    times: '第二期',
                    date: '2017.8.12',
                    amount: '2500元',
                    isRepay: false,
                }, {
                    times: '第三期',
                    date: '2017.8.12',
                    amount: '2500元',
                    isRepay: false,
                }
            ]
        }
    },
    methods: {
        handleClick() {

        }
    }
}
</script>
<style lang="scss" scoped>
.account {
    font-size: 16px;
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .card-info {
        background-color: #FF4949;
        width: 320px;
        height: 100px;
        color: #fff;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        margin: 20px;
        >span {
            margin-top: 15px;
            display: inline-block;
        }
    }
    .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;
        span {
            margin-bottom: 10px;
        }
        ul {
            li {
                background-color: #fff;
                width: 320px;
                display: flex;
                flex-direction: column;
                margin-bottom: 10px;
                padding-top: 10px;
                >span {
                    align-self: flex-start;
                    margin-left: 10px;
                }
                >div {
                    display: flex;
                    justify-content: space-around;
                    >div {
                        display: flex;
                        flex-direction: column;
                        >span.text-dec {
                            font-size: 12px;
                        }
                    }
                    .status {
                        >span {
                            &:nth-of-type(1) {
                                border-radius: 5px;
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
