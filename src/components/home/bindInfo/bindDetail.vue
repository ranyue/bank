<template>
  <div class="detail">
    <div class="content">
      <span>恭喜，贷款申请已通过！</span>
      <mt-field label="姓名：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="cust_name"></mt-field>
      <mt-field label="还款卡号：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <mt-field label="保险金额：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <mt-field label="分期期数：" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <div>
        <span>分期还款计划表：</span>
        <mt-button plain type="primary"  @click.native="showDetail" >点击查看</mt-button>
      </div>
    </div>
    <span>请点击下一步，签订合同，进行放款</span>
     <mt-button  plain type="primary"  @click.native="goToNext">下一步</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      readonly: true
    }
  },
  computed: {
    cust_name() {
      return this.$store.state.home.initialInfo.cust_name
    },
    cus_card_sno() {
      return this.$store.state.home.initialInfo.cus_card_sno
    }
  },
  methods: {
    goToNext() {
      this.$store.dispatch('queryRepayPlan',{
        clientName: this.cust_name,
        clientID: this.cus_card_sno
      })
       this.$store.commit('to_next_step')
      this.$router.push('/home/signContract')
    },
    showDetail() {
      this.$router.push('showDetail')
    }
  }
}
</script>
<style lang="scss" scoped>
  .detail{
    font-size: 16px;
    .content{
      margin-top: 20px;
      margin-bottom: 70px;
      >span{
          font-weight: 700;
          display:inline-block;
          margin-bottom: 20px;
      }
    }
    .mint-button{
     height: 25px;
     font-size: 16px;
    }
  }
</style>
