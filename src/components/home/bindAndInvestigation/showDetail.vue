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
    methods: {
        handleClick() {
            this.$emit('hideDetail')
        }
    }
}
</script>
<style lang="scss" scoped>
.show-detail {
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    >span {
        font-size: 18px;
        font-weight: 700;
        margin-top: 30px;
    }
    .table {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 120px;
        ul {
            border-bottom: 1px solid #c3c3c3;
            border-right: 1px solid #c3c3c3;
            display: flex;
            flex-direction: column;
            width: 270px;
            -webkit-padding-start: 0;
            li {
                display: flex;
                font-size: 15px;
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 90px;
                    height: 30px;
                    border-left: 1px solid #c3c3c3;
                    border-top: 1px solid #c3c3c3;
                }
            }
        }
    }
    .mint-button {
        margin: 20px 0 20px 7%;
        width: 86%;
    }
}
</style>
