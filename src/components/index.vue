<template>
    <div class="hello">
        <mt-header title="车保分期">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">分期信息</mt-tab-item>
            <mt-tab-item id="2">身份认证</mt-tab-item>
            <mt-tab-item id="3">绑卡及征信</mt-tab-item>
              <mt-tab-item id="4">签订合同</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                 <firstTab></firstTab>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <secondTab></secondTab>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
               <thirdTab></thirdTab>
            </mt-tab-container-item>
              <mt-tab-container-item id="4">
                <mt-cell v-for="(n, index) in 6" :title="'选项 ' + n" :key="index" />
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-button type="danger" size="large" @click.native="handleClick">下一步</mt-button>
    </div>
</template>

<script>
import firstTab from './firstTab.vue'
import secondTab from './secondTab.vue'
import thirdTab from './thirdTab.vue'
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            selected: "1"
        }
    },
    components: {
        firstTab,
        secondTab,
        thirdTab
    },
    methods: {
        handleClick() {
            if(Number(this.selected) === 4){
                return
            }
            this.selected = String(Number(this.selected) + 1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './../public/sass/common.scss';
</style>

