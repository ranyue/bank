<template>
  <div class="IDinfo">
    <mt-field label="身份证号：" placeholder="请输入身份证号" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="姓名：" placeholder="请输入姓名" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="性别：" placeholder="请输入性别" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="民族" placeholder="请输入民族" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="出生日期：" placeholder="请输入出生日期" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="家庭地址：" placeholder="请输入家庭地址" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="签发机关：" placeholder="请输入签发机关" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="起始日期：" placeholder="请输入起始日期" type="number"  v-model="licencePlateNum"></mt-field>
    <mt-field label="截止日期：" placeholder="请输入截止日期" type="number"  v-model="licencePlateNum"></mt-field>
  </div>
</template>
<script>
export default {
  data(){
    return{
      licencePlateNum: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>