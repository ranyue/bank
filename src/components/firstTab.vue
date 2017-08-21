<template>
    <div>
        <mt-field label="车牌号" placeholder="脱敏(不可修改)" v-model="username"></mt-field>
        <mt-field label="车架号" placeholder="脱敏(不可修改)" type="email" v-model="email"></mt-field>
        <mt-field label="姓名" placeholder="脱敏(不可修改)" type="password" v-model="password"></mt-field>
        <mt-field label="手机号" placeholder="输入后6位，验证" type="tel" v-model="phone"></mt-field>
        <mt-field label="选择期数" placeholder="自动反显(可修改)" type="number" v-model="number"></mt-field>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: '',
            email: '',
            password: '',
            phone: '',
            number: '',
            birthday: ''
        }
    }
}
</script>
