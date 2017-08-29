<template>
    <div class="home">
        <mt-header title="车保分期">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <!-- <mt-navbar v-model="selected">
            <mt-tab-item id="1">分期信息</mt-tab-item>
            <mt-tab-item id="2">身份认证</mt-tab-item>
            <mt-tab-item id="3">绑卡及征信</mt-tab-item>
            <mt-tab-item id="4">签订合同</mt-tab-item>
        </mt-navbar> -->
        <el-steps :active="Number(selected) -1" :center="center">
            <el-step title="分期信息" ></el-step>
            <el-step title="身份认证" ></el-step>
            <el-step title="绑卡及征信" ></el-step>
            <el-step title="签订合同" ></el-step>
        </el-steps>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <firstTab @toNext = "goToNextStep"></firstTab>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <secondTab @toNext = "goToNextStep"></secondTab>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" >
                <thirdTab @toNext="goToNextStep"></thirdTab>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <signContract></signContract>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- <mt-button type="danger" size="large" @click.native="handleClick">下一步</mt-button> -->
    </div>
</template>

<script>
import firstTab from './instalmentInfo/index.vue'
import secondTab from './identityAuthentication/index.vue'
import thirdTab from './bindAndInvestigation/index.vue'
import signContract from './signContract/index.vue'
export default {
    name: 'hello',
    data() {
        return {
            selected: "1",
            center: true,
            loading: true
            }
    },
    components: {
        firstTab,
        secondTab,
        thirdTab,
        signContract
    },
    methods: {
        goToNextStep() {
            if (Number(this.selected) === 4) {
                return
            }
            this.selected = String(Number(this.selected) + 1)
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
   
}

.mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}
</style>



