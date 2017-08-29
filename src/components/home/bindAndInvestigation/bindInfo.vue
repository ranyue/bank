<template>
    <div class="bind-info">
        <mt-field label="姓名：" placeholder="请输入姓名" type="number" :readonly="readonly" v-model="licencePlateNum"></mt-field>
        <mt-field label="银行卡号：" placeholder="请输入银行卡号" type="number" v-model="licencePlateNum"></mt-field>
        <mt-field label="卡类型：" placeholder="卡类型" type="number" v-model="licencePlateNum"></mt-field>
        <mt-field label="预留手机号：" placeholder="请输入预留手机号" type="number" v-model="licencePlateNum"></mt-field>
        <div class="code">
             <mt-field label="验证码：" placeholder="请输入验证码" type="number" v-model="licencePlateNum"></mt-field>
              <mt-button plain type="primary" @click.native="handleClick">获取验证码</mt-button>
        </div>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            licencePlateNum: '',
            readonly: true,
        }
    },
    methods: {
        handleClick() {

        }
    }
}
</script>

<style lang="scss" scoped>
.bind-info{
   .code{
       display: flex;
       align-items: center;
       >a{
           width: 60%;
       }
       >button.mint-button{

           width: 30%;
           font-size: 14px;
           height: 35px;
       }
   }
}
</style>

