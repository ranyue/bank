<template>
    <div class="base-info">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="最高学历">
                <el-select v-model="form.education_level" placeholder="请选择学历">
                    <el-option v-for="item in education_level" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="婚姻状况">
                <el-select v-model="form.marita_status" placeholder="请选择">
                    <el-option v-for="item in marita_status" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="子女人数">
                <el-select v-model="form.children_num" placeholder="请选择">
                    <el-option v-for="item in children_num" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="住房状况">
                <el-select v-model="form.househand_info" placeholder="请选择">
                    <el-option v-for="item in househand_info" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="主用号码">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="职业">
                <el-select v-model="form.profession" placeholder="请选择">
                    <el-option v-for="item in profession" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="单位名称">
                <el-input v-model="form.company_name"></el-input>
            </el-form-item>
            <el-form-item label="单位地址">
                <el-input v-model="form.company_addr"></el-input>
            </el-form-item>
            <el-form-item label="职称">
                <el-select v-model="form.profession_title" placeholder="请选择">
                    <el-option v-for="item in profession_title" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="净资产(元)">
                <el-input v-model="form.estate_count"></el-input>
            </el-form-item>
        </el-form>
        <mt-button plain type="primary" @click.native="handleClick">下一步</mt-button>
    </div>
</template>

<script>
import Service from './../../../api/index.js'
export default {
    data() {
        return {
            education_level: [
                {
                    label: '博士及以上',
                    value: '1'
                },
                {
                    label: '研究生',
                    value: '2'
                },
                {
                    label: '大学本科',
                    value: '3'
                },
                {
                    label: '大学专科',
                    value: '5'
                },
                {
                    label: '中专/中等技校',
                    value: '6'
                },
                {
                    label: '技术学校',
                    value: '7'
                },
                {
                    label: '高中',
                    value: '8'
                },
                {
                    label: '初中',
                    value: '9'
                },
                {
                    label: '小学',
                    value: '11'
                },
                {
                    label: '文盲或半文盲',
                    value: '12'
                }
            ],
            marita_status: [
                {
                    label: '未婚',
                    value: 1
                },
                {
                    label: '初婚',
                    value: 2
                },
                {
                    label: '再婚',
                    value: 4
                },
                {
                    label: '复婚',
                    value: 5
                }, {
                    label: '丧偶',
                    value: 6
                }, {
                    label: '离婚',
                    value: 7
                }
            ],
            children_num: [
                {
                    label: '0',
                    value: 1
                },
                {
                    label: '1',
                    value: 2
                },
                {
                    label: '2',
                    value: 4
                },
                {
                    label: '3',
                    value: 5
                },
                {
                    label: '4',
                    value: 6
                },
                {
                    label: '五个及以上',
                    value: 7
                },

            ],
            househand_info: [
                {
                    label: '商品房(全额)',
                    value: '11'
                },
                {
                    label: '按揭',
                    value: '44'
                },
                {
                    label: '亲属楼宇',
                    value: '33'
                },
                {
                    label: '集体宿舍',
                    value: '3'
                },
                {
                    label: '租房',
                    value: '2'
                },
                {
                    label: '共有住房',
                    value: '22'
                },
                {
                    label: '农村自建房',
                    value: '11'
                }
            ],
            profession: [
                {
                    label: '国家机关、党群组织、企业、事业单位负责人',
                    value: '1'
                },
                {
                    label: '专业技术人员',
                    value: '2'
                },
                {
                    label: '办事人员和有关人员',
                    value: '3'
                },
                {
                    label: '商业、服务业人员',
                    value: '4'
                },
                {
                    label: '农、林、牧、渔、水利业生产人员',
                    value: '5'
                },
                {
                    label: '生产、运输设备操作人员及有关人员',
                    value: '6'
                },
                {
                    label: '军人',
                    value: '7'
                },
                {
                    label: '不便分类的其他从业人员',
                    value: '8'
                },
                {
                    label: '未知',
                    value: '9'
                }
            ],
            profession_title: [
                {
                    label: '高级工程师',
                    value: '0'
                },
                {
                    label: '中级工程师',
                    value: '1'
                },
                {
                    label: '初级工程师',
                    value: '2'
                }, {
                    label: '技术人员',
                    value: '3'
                }
            ],
            industry: [
                {
                    label: 'aaaaa',
                    value: '1'
                },
                {
                    label: 'bbbb',
                    value: '2'
                }, {
                    label: 'ccc',
                    value: '3'
                }
            ],
            form: {
                education_level: '',
                marita_status: '',
                children_num: '',
                househand_info: '',
                profession: '',
                work_duty: '',
                establishment: '',
                profession_title: '',
                company_name: '',
                company_addr: '',
                estate_count: '',
                phone: ''
            }
        }
    },
    methods: {
        handleClick() {
            let params = {
                appAccessToken: this.routeInfo.appAccessToken,
                appID: this.routeInfo.appID,
                encryptMethod: "NONE",
                reqData: {
                    sno: this.paramsObj.sno,
                    original: this.paramsObj.original,
                    biz_sence_sno: this.routeInfo.biz_sence_sno,
                    education_level: "1",
                    marita_status: "1",
                    children_num: "2",
                    househand_info: "1",
                    profession: "1",
                    work_duty: "1",
                    establishment: "1",
                    profession_title: "1",
                    company_name: "X",
                    company_addr: "X",
                    estate_count: "X",
                },
                "seqNO": this.paramsObj.sno,
            }
            this.$store.dispatch('add_client_sub_info', params)
                .then(res => {     
                    this.$emit('toNexT', {
                        type: 'goToNextSteps'
                    })
                })
            // this.$emit('toNexT', {
            //     type: 'goToNextSteps'
            // })
        }
    },
    computed: {
        routeInfo() {
            return this.$store.state.home.routeInfo
        },
        paramsObj() {
            return this.$store.state.home.paramsObj
        },
        initialInfo() {
            return this.$store.state.home.initialInfo
        }

    }
}
</script>

<style lang="scss" scoped>
.base-info {
    margin-top: 15px;
    .mint-button {
        margin: 20px 0 20px 0;
        width: 86%;
    }
}
</style>
