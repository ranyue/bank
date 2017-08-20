<template>
    <div>
        <mt-field label="身份证号" placeholder="自动反显(可修改)" v-model="username"></mt-field>
        <mt-field label="姓名" placeholder="自动反显(可修改)" type="email" v-model="email"></mt-field>
        <mt-field label="性别" placeholder="自动反显(可修改)" type="password" v-model="password"></mt-field>
        <mt-field label="民族" placeholder="自动反显(可修改)" type="tel" v-model="phone"></mt-field>
        <mt-field label="出生日期" placeholder="自动反显(可修改)" type="date" v-model="birthday"></mt-field>
        <mt-field label="家庭地址" placeholder="自动反显(可修改)" type="textarea" rows="4" v-model="introduction"></mt-field>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            introduction: ''
        }
    }
}
</script>
