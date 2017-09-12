<template>
    <div class="show-detail">
        <span>分期还款计划表</span>
        <div class="table">
            <ul>
                <li v-for="(item ,index) in info" :key="index">
                    <span>{{item.times}}</span>
                    <span>{{item.date}}</span>
                    <span>{{item.amount}}</span>
                </li>
            </ul>
        </div>
        <mt-button type="danger" @click.native="handleClick">关闭</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: [
                {
                    times: '还款分期',
                    date: '还款时间',
                    amount: '还款额度'
                },
                {
                    times: '第一期',
                    date: '2017.8.12',
                    amount: '2500元'
                },
                {
                    times: '第一期',
                    date: '2017.8.12',
                    amount: '2500元'
                }, {
                    times: '第一期',
                    date: '2017.8.12',
                    amount: '2500元'
                }
            ]
        }
    },
    computed: {
        repayPlan() {
            return this.$store.state.bindInfo.repayPlan
        }
    },
    methods: {
        handleClick() {
            this.$router.push('bindDetail')
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../../../public/sass/common.scss';
.show-detail {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%; // height: 100%;
    display: flex;
    flex-direction: column;
    >span {
        font-size: pxToRem(18px);
        font-weight: 700;
        margin-top: pxToRem(30px);
    }
    .table {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: pxToRem(30px);
        margin-bottom: pxToRem(120px);
        ul {
            border-bottom: 1px solid #c3c3c3;
            border-right: 1px solid #c3c3c3;
            display: flex;
            flex-direction: column;
            width: pxToRem(270px);
            -webkit-padding-start: 0;
            li {
                display: flex;
                font-size: pxToRem(15px);
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: pxToRem(90px);
                    height: pxToRem(30px);
                    border-left: 1px solid #c3c3c3;
                    border-top: 1px solid #c3c3c3;
                }
            }
        }
    }
    .mint-button {
        width: pxToRem(301px);
        height: pxToRem(50px);
        margin-top: pxToRem(40px);
        margin-bottom: pxToRem(29px);
    }
}
</style>
