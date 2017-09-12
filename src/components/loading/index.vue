<template>
    <div class="loading">
         <mt-header title="车保分期登陆">
            <!-- <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link> -->
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="content">
            <mt-field label="客户姓名：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
            <mt-field label="身份证号：" placeholder="身份证后六位，验证" v-model="name"></mt-field>
            <mt-field label="电话：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
            <mt-field label="验证码：" placeholder="脱敏(不可修改)" v-model="name"></mt-field>
        </div>
        <mt-button plain type="primary" @click.native="handleClick">登入</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            readonly: true,
            name: ''
        }
    },
    methods: {
        handleClick() {
           this.$router.push({path: '/account'});
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../../public/sass/common.scss';
.loading {
    .content{
        margin-top: pxToRem(60px);
    }
    .mint-button {  
        width: 86%;
    }
}
</style>
