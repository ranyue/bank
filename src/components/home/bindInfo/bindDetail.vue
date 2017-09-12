<template>
  <div class="detail">
    <div class="content">
      <span>恭喜，贷款申请已通过！</span>
      <mt-field label="姓名" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="cust_name"></mt-field>
      <mt-field label="还款卡号" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <mt-field label="保险金额" class="orange" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <mt-field label="分期期数" placeholder="脱敏(不可修改)" :readonly="readonly" v-model="name"></mt-field>
      <div class="table">
        <span>分期还款计划表</span>
        <mt-button plain type="primary" @click.native="showDetail">点击查看</mt-button>
      </div>
    </div>
    <span class="but-text">请点击下一步，签订合同，进行放款</span>
    <mt-button plain type="primary" @click.native="goToNext">下一步</mt-button>
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
      this.$store.dispatch('queryRepayPlan', {
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
@import './../../../public/sass/common.scss';
.detail {
  font-size: pxToRem(16px);
  padding: 0 pxToRem(10px);
  .content {
    margin-top: pxToRem(20px);
    margin-bottom: pxToRem(70px);
    >span {
      font-weight: 700;
      display: inline-block;
      margin-bottom: pxToRem(20px);
      font-family: SourceHanSansCN-Regular;
      font-size: 18px;
      color: #417505;
      letter-spacing: -0.44px;
    }
    .table {
      display: flex;
      align-items: center;
      height: pxToRem(42px);
      .mint-button {
        margin-left: pxToRem(10px);
        height: pxToRem(30px);
        width:  pxToRem(100px);
        font-size: pxToRem(16px);
        border: 1px solid #4A90E2;
        border-radius: pxToRem(6px);
      }
    }
    .orange {
      .mint-cell-value {
        color: #F58C23;
      }
    }
  }
  .but-text {
    font-family: SourceHanSansCN-Regular;
    font-size: pxToRem(14px);
    color: #999999;
    letter-spacing: pxToRem(-0.7px);
  }
  >.mint-button {
    width: pxToRem(301px);
    height: pxToRem(50px);
    margin-top: pxToRem(40px);
    margin-bottom: pxToRem(29px);
  }
}
</style>
