<template>
  <div class="IDinfo">
    <mt-field label="身份证号：" placeholder="请输入身份证号" type="number" v-model="fontInfo.citizen_id"></mt-field>
    <mt-field label="姓名：" placeholder="请输入姓名"  v-model="fontInfo.name"></mt-field>
    <mt-field label="性别：" placeholder="请输入性别"  v-model="fontInfo.gender"></mt-field>
    <mt-field label="民族" placeholder="请输入民族"  v-model="fontInfo.nation"></mt-field>
    <mt-field label="出生日期：" placeholder="请输入出生日期"  v-model="fontInfo.birthday"></mt-field>
    <mt-field label="家庭地址：" placeholder="请输入家庭地址"  v-model="fontInfo.address"></mt-field>
    <mt-field label="签发机关：" placeholder="请输入签发机关"  v-model="backInfo.agency"></mt-field>
    <mt-field label="起始日期：" placeholder="请输入起始日期"  v-model="backInfo.valid_date_begin"></mt-field>
    <mt-field label="截止日期：" placeholder="请输入截止日期"  v-model="backInfo.valid_date_end"></mt-field>
      <mt-button  plain type="primary"  @click.native="handleClick">下一步</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      licencePlateNum: ''
    }
  },
  computed: {
    fontInfo: {
      get() {
       return this.$store.state.identifyInfo.fontInfo
      },
      set(value) {
        this.$store.commit('saveFontInfo', value)
      }
    },
    backInfo: {
      get() {
        return this.$store.state.identifyInfo.backInfo
      },
      set(value) {
        this.$store.commit('saveBackInfo', value)
      }
    }
  },
  methods: {
    handleClick() {
      this.$router.push('faceInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
    .mint-button {
        margin: 20px 0 20px 0;
        width: 86%;
    }
</style>