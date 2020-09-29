<template>
  <div class="contact">
    <div class="contact-container">
      <div class="contact-title">联系人</div>

      <div class="contact-body">
        <!-- <el-button
          class="cus-el-button-round create-contact-btn"
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="createCustomerDialogVisible = true"
          >添加联系人
        </el-button> -->

        <el-tabs tab-position="left" class="contact-tab">
          <!-- 全部 -->
          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">全部</div>
              <div class="total">{{ allCustomerList.length }}</div>
            </div>

            <div>
              <!-- <contact-table :table-data="allCustomerList"></contact-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">企业客户</div>
              <div class="total">{{ enterpriseCustomerList.length }}</div>
            </div>

            <div class="lawyer-contact-el-tabs-panel">
              <!-- <contact-table :table-data="enterpriseCustomerList"></contact-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">个人客户</div>
              <div class="total">{{ singleCustomerList.length }}</div>
            </div>

            <div>
              <!-- <contact-table :table-data="singleCustomerList"></contact-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">我关注的</div>
              <div class="total">{{ followCustomerList.length }}</div>
            </div>

            <div>
              <!-- <contact-table :table-data.sync="followCustomerList"></contact-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">服务中</div>
              <div class="total">{{ underwayCustomerList.length }}</div>
            </div>

            <div>
              <!-- <contact-table :table-data="underwayCustomerList"></contact-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label" class="contact-tab-left-item">
              <div class="text">对方/关联当事人</div>
              <div class="total">{{ relationCustomerList.length }}</div>
            </div>

            <div>
              <!-- <relation-table :table-data="relationCustomerList"></relation-table> -->
            </div>
          </el-tab-pane>

          <el-tab-pane>
            <div slot="label">
              <div class="text">跟进计划</div>
              <div class="total">3</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <el-dialog
      title="添加联系人"
      :visible.sync="createCustomerDialogVisible"
      top="5vh"
      width="690px"
    >
      <el-tabs v-model="createCustomerDialogActiveName" type="card">
        <el-tab-pane label="企业" name="first">
          <el-form
            ref="form"
            :model="enterpriseFormGroup"
            :validate="validateForm"
            :rules="rules"
            label-width="50px"
          >
            <!-- 企业相关 -->
            <el-form-item prop="name">
              <template v-slot:label>
                <i class="iconfont icon-company icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.name"
                placeholder="* 企业名称"
                clearable
              ></el-input>
            </el-form-item>

            <el-form-item prop="shortName">
              <template v-slot:label>
                <i class="iconfont icon-jiancheng icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.shortName"
                placeholder="  企业简称"
                clearable
              >
              </el-input>
            </el-form-item>

            <el-form-item prop="industries">
              <template v-slot:label>
                <i class="iconfont icon-tool icon-label"></i>
              </template>
              <el-select
                v-model="enterpriseFormGroup.industries"
                placeholder=" 所属行业"
                clearable
              >
                <el-option
                  v-for="(industrie, index) in industriesDict"
                  :key="index"
                  :label="industrie"
                  :value="industrie"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item prop="registerDate">
              <template v-slot:label>
                <i class="iconfont icon-calendar icon-label"></i>
              </template>

              <el-date-picker
                type="date"
                v-model="enterpriseFormGroup.registerDate"
                placeholder=" 注册日期"
              >
              </el-date-picker>
            </el-form-item>

            <!-- 联系人 -->

            <el-form-item prop="linkman">
              <template v-slot:label>
                <i class="iconfont icon-xinxibar_zhanghu icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.linkman"
                placeholder="* 联系人"
                class="has-extra"
              >
              </el-input>
              <el-select
                v-model="enterpriseFormGroup.linkmanGender"
                placeholder="请选择性别"
                class="is-extra"
              >
                <el-option label="先生" value="1"></el-option>
                <el-option label="女士" value="0"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item prop="linkmanPhone">
              <template v-slot:label>
                <i class="iconfont icon-dianhua icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.linkmanPhone"
                placeholder="* 电话"
                class="has-extra"
              >
              </el-input>
              <el-select
                v-model="enterpriseFormGroup.linkmanPhonePhoneType"
                placeholder="类型"
                class="is-extra"
              >
                <el-option label="手机" value="手机"></el-option>
                <el-option label="家庭" value="家庭"></el-option>
                <el-option label="办公" value="办公"></el-option>
              </el-select>

              <i class="iconfont icon-jiahao add-item-icon"></i>
            </el-form-item>

            <el-form-item prop="linkmanEmail">
              <template v-slot:label>
                <i class="iconfont icon-email icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.linkmanEmail"
                placeholder="* 邮箱"
                class="has-extra"
              >
              </el-input>

              <el-select
                v-model="enterpriseFormGroup.linkmanEmailType"
                placeholder="类型"
                class="is-extra"
              >
                <el-option label="工作" value="工作"></el-option>
                <el-option label="私人" value="私人"></el-option>
              </el-select>

              <i class="iconfont icon-jiahao add-item-icon"></i>
            </el-form-item>

            <el-form-item prop="credential">
              <template v-slot:label>
                <i class="iconfont icon-namecard icon-label"></i>
              </template>
              <el-input
                class="has-extra"
                v-model="enterpriseFormGroup.credential"
                placeholder="  证件号"
              >
              </el-input>
              <el-select
                v-model="enterpriseFormGroup.credentialType"
                placeholder="类型"
                class="is-extra"
              >
                <el-option label="营业执照" value="工作"></el-option>
                <el-option
                  label="组织机构代码"
                  value="组织机构代码"
                ></el-option>
                <el-option
                  label="统一社会信用代码"
                  value="统一社会信用代码"
                ></el-option>
                <el-option label="税务登记证" value="税务登记证"></el-option>
                <el-option label="卫生许可证" value="卫生许可证"></el-option>
              </el-select>

              <i class="iconfont icon-jiahao add-item-icon"></i>
            </el-form-item>

            <el-form-item prop="credential">
              <template v-slot:label>
                <i class="iconfont icon-map icon-label"></i>
              </template>

              <div class="cus-create-customer-form-address-wrap">
                <div
                  class="cus-create-customer-form-address-group display-flex"
                >
                  <div class="address-group-pcc">
                    <el-select
                      v-model="enterpriseFormGroup.credentialType"
                      placeholder=" 选择省份"
                    >
                      <el-option label="江西" value="江西"></el-option>
                    </el-select>
                  </div>
                  <div class="address-group-pcc">
                    <el-select
                      v-model="enterpriseFormGroup.credentialType"
                      placeholder=" 选择市区"
                    >
                      <el-option label="南昌" value="南昌"></el-option>
                    </el-select>
                  </div>
                  <div class="address-group-pcc">
                    <el-select
                      v-model="enterpriseFormGroup.credentialType"
                      placeholder=" 选择县镇"
                    >
                      <el-option label="南昌县" value="南昌县"></el-option>
                    </el-select>
                  </div>
                  <i class="iconfont icon-jiahao add-item-icon"></i>
                </div>

                <div class="detailed-address-group display-flex">
                  <el-input placeholder="请输入内容"></el-input>

                  <el-select
                    v-model="enterpriseFormGroup.credentialType"
                    placeholder=" 选择县镇"
                  >
                    <el-option label="南昌县" value="南昌县"></el-option>
                  </el-select>
                </div>
              </div>
            </el-form-item>

            <el-form-item prop="remark">
              <template v-slot:label>
                <i class="iconfont icon-editor icon-label"></i>
              </template>
              <el-input
                v-model="enterpriseFormGroup.remark"
                placeholder="  备注"
                class="cus-create-customer-form-input"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="个人" name="second">
          <div>个人</div>
        </el-tab-pane>
      </el-tabs>

      <span slot="footer" class="dialog-footer">
        <div class="el-dialog-footer-btn-group">
          <el-button
            class="cus-el-btn-round"
            @click="createCustomerDialogVisible = false"
            >取消</el-button
          >
          <el-button class="cus-el-btn-round">重置</el-button>
          <el-button
            class="cus-el-btn-round"
            type="primary"
            @click="createEnterpriseCustomer"
            >确定
          </el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    let validatePhone = function(rule, value, callback) {
      const reg = /^[1][3-9][0-9]{9}$/;
      if (value == '' || value == undefined || value == null) {
        callback();
      } else {
        if (!reg.test(value) && value != '') {
          callback(new Error('请输入正确的电话号码'));
        } else {
          callback();
        }
      }
    };

    return {
      allCustomerList: [
        {
          contactName: '安徽和威农业开发股份有限责2任公司',
          phone: '0792-7783000-1101',
          email: 'ushan2@jjccb.com',
          lastFollowTime: '2020-09-26',
          naxtFollowTime: '2020-08-07',
          isFollow: true,
          type: 'company'
        },
        {
          contactName: '九江银行股份有限公司',
          phone: '0792-7783000-1101',
          email: 'ushan2@jjccb.com',
          lastFollowTime: '2020-06-07',
          naxtFollowTime: '2020-08-07',
          isFollow: false,
          type: 'company'
        },
        {
          contactName: '张三丰',
          phone: '13121241415',
          email: '',
          lastFollowTime: '2020-03-07',
          naxtFollowTime: '2020-08-07',
          isFollow: true,
          type: 'single'
        },
        {
          contactName: '李四',
          phone: '13121241415',
          email: '',
          lastFollowTime: '2020-03-07',
          naxtFollowTime: '2020-08-07',
          isFollow: false,
          type: 'single'
        }
      ],
      enterpriseCustomerList: [],
      singleCustomerList: [],
      followCustomerList: [],
      underwayCustomerList: [],
      // 关联项目
      relationCustomerList: [
        {
          contactName: '九江银行股份有限公司',
          phone: '0792-7783000-1101',
          email: 'ushan2@jjccb.com',
          lastFollowTime: '2020-06-07',
          naxtFollowTime: '2020-08-07',
          isFollow: false,
          type: 'company'
        },
        {
          contactName: '张三丰',
          phone: '13121241415',
          email: '',
          lastFollowTime: '2020-03-07',
          naxtFollowTime: '2020-08-07',
          isFollow: true,
          type: 'single'
        }
      ],
      createCustomerDialogVisible: false,
      createCustomerDialogActiveName: 'first',
      enterpriseFormGroup: {
        name: '',
        shortName: '',
        linkman: '',
        linkmanGender: '1',
        industries: '',
        registerDate: '',
        lnkmanPhone: '',
        linkmanPhoneType: '',
        linkmanEmail: '',
        linkmanEmailType: ''
      },
      // 字典数据
      industriesDict: ['房地产', '法律'],
      rules: {
        name: { required: true, message: '企业名不能为空', trigger: 'change' },
        linkman: {
          required: true,
          message: '联系人不能为空',
          trigger: 'change'
        },
        linkmanPhone: [
          { required: true, message: '联系人电话不能为空', trigger: 'change' },
          { validator: validatePhone, trigger: 'change' }
        ]
      },
      saveBtnDisabled: true
    };
  },
  created() {
    this.enterpriseCustomerList = this.allCustomerList.filter(
      e => e.type == 'company'
    );
    this.singleCustomerList = this.allCustomerList.filter(
      e => e.type == 'single'
    );
    this.followCustomerList = this.allCustomerList.filter(e => e.isFollow);
    this.underwayCustomerList = this.allCustomerList.filter(e => e.isUnderway);
  },
  methods: {
    createEnterpriseCustomer() {
      console.log(this.enterpriseFormGroup);
    },
    validateForm(e) {
      console.log(e);
    }
  },
  watch: {
    enterpriseFormGroup: {
      handler: function(newVal, oldVal) {
        console.log(newVal.name);

        this.$refs.form.validate(function(e) {
          console.log(e);
        });
      },
      deep: true
    }
  }
};
</script>

<style lang="less" scoped>
@namespace: contact;

.@{namespace} {
  &-container {
    width: 1366px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
  }

  &-title {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #343434;
    line-height: 28px;
    margin-bottom: 30px;
  }

  &-body {
    position: relative;
    background: #fff;
  }
}

.contact-tab {
  /deep/ .el-tabs__header.is-left {
    width: 250px;
  }

  /deep/ .el-tabs__item {
    height: 60px;
  }

  /deep/ .el-tabs__item.is-active {
    color: #409eff;
    background: #f7faff;
  }
}

.contact-tab-left {
  &-item {
    display: flex;
    height: 100%;
    align-items: center;

    > div {
      flex: 1;
    }

    > .text {
      text-align: left;
    }

    > .total {
      text-align: right;
    }
  }
}
</style>