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
        background-color: #FF4949;
        width:  pxToRem(320px);
        height:  pxToRem(100px);
        color: #fff;
        font-size:  pxToRem(18px);
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        margin:  pxToRem(20px);
        >span {
            margin-top:  pxToRem(15px);
            display: inline-block;
        }
    }
    .detail {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom:  pxToRem(20px);
        span {
            margin-bottom:  pxToRem(10px);
        }
        ul {
            li {
                background-color: #fff;
                width:  pxToRem(320px);
                display: flex;
                flex-direction: column;
                margin-bottom:  pxToRem(10px);
                padding-top:  pxToRem(10px);
                >span {
                    align-self: flex-start;
                    margin-left:  pxToRem(10px);
                }
                >div {
                    display: flex;
                    justify-content: space-around;
                    >div {
                        display: flex;
                        flex-direction: column;
                        >span.text-dec {
                            font-size:  pxToRem(12px);
                        }
                    }
                    .status {
                        >span {
                            &:nth-of-type(1) {
                                border-radius:  pxToRem(5px);
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
