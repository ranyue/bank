<template>
    <div class="home">
        <mt-header title="车保分期">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click.native="goBack">返回</mt-button>
            </router-link>
        </mt-header>
        <el-steps :active="step" align-center finish-status="success">
            <el-step title="分期信息"></el-step>
            <el-step title="身份认证"></el-step>
            <el-step title="绑卡及征信"></el-step>
            <el-step title="签订合同"></el-step>
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
        },
        goBack() {
           if(this.$router.currentRoute.path === '/home/registerInfo/calculate') {
               return
           }
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
@import './../../public/sass/common.scss';
.home {
    font-family: SourceHanSansCN-Light;
    font-size: pxToRem(14px);
    color: #030303;
    letter-spacing: pxToRem(-0.7px);
    .mint-tab-container {
        overflow: unset;
    }
    >.el-steps {
        padding-left: pxToRem(26px);
        margin-right: pxToRem(-32px);
    }
    >.mint-header {
       background: #FAFAFA;
       height: pxToRem(50px);
       padding: pxToRem(13px) 0 pxToRem(10px);
    }
    >.is-horizontal{
         background: #FAFAFA;
    }
  
}

</style>



