<template>
    <div class="home">
        <mt-header title="车保分期">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <el-steps :active="step" align-center finish-status="success" >
            <el-step title="分期信息" ></el-step>
            <el-step title="身份认证" ></el-step>
            <el-step title="绑卡及征信" ></el-step>
            <el-step title="签订合同" ></el-step>
        </el-steps>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'hello',
    computed: {
        step() {
            return this.$store.state.home.step
        }
    },
    methods: {
        goToNextStep() {
            if (Number(this.step) === 3) {
                return
            }
            this.$store.commit('to_next_step')
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // overflow: hidden;
    .mint-tab-container{
        overflow: unset;
    }
    >.el-steps{
        padding-left: 26px;
        margin-right: -32px;
    }
   
}

.mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}
</style>



