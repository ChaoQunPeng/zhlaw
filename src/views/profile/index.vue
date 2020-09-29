<template>
  <div>
    <div>
      <div class="person-center">
        <h3 class="person-center-title">个人中心</h3>
        <div class="person-center-panel">
          <div class="person-center-panel-logo">
            <div class="person-center-panel-logo-bg"></div>
            <div class="person-center-panel-logo-text">大锤</div>
          </div>
          <div class="person-center-panel-title">基本信息</div>
          <div class="person-center-panel-body">
            <qf-sv>
              <template v-slot:prefix>姓名：</template>
              张大锤
            </qf-sv>

            <!-- 已加入 -->
            <!-- <qf-sv>
                        <template v-slot:prefix>律所：</template>
                        江西秦风律师事务所
                        <template v-slot:suffix>
                            <el-button round size="small" plain class="pcp-btn">退出</el-button>
                        </template>
                    </qf-sv> -->

            <!-- 选择律所加入 -->
            <!-- <qf-sv>
                        <template v-slot:prefix>律所：</template>
                        <el-select v-model="lawOffice" placeholder="请选择" clearable filterable class="custom-el-select"
                            style="width:350px;">
                            <el-option label="江西秦风律师事务所（南昌总部）" value="1"></el-option>
                            <el-option label="江西秦风律师事务所（宜春分部）" value="2"></el-option>
                        </el-select>

                        <template v-slot:suffix>
                            <el-button round size="small" plain class="pcp-btn">加入</el-button>
                        </template>
                    </qf-sv> -->

            <!-- 审核中 -->
            <qf-sv class="relative">
              <template v-slot:prefix>律所：</template>
              江西秦风律师事务所
              <div class="iconfont icon-yijieshu ls-audit-icon"></div>
              <template v-slot:suffix>
                <el-button
                  round
                  size="small"
                  plain
                  class="pcp-btn"
                  @click="confirmCancelJoinLawOffice"
                  >取消
                </el-button>
              </template>
            </qf-sv>

            <qf-sv>
              <template v-slot:prefix>执政证号：</template>
              11101200910114238
            </qf-sv>

            <qf-sv>
              <template v-slot:prefix>微信：</template>
              18862440520
              <template v-slot:suffix>
                <el-button
                  round
                  size="small"
                  plain
                  class="pcp-btn"
                  @click="unbound('wechat')"
                  >解绑
                </el-button>
                <el-button
                  round
                  size="small"
                  plain
                  class="pcp-btn"
                  @click="modifyWeChatVisible = true"
                  >更改
                </el-button>
              </template>
            </qf-sv>

            <qf-sv>
              <template v-slot:prefix>手机：</template>
              18862440520
              <template v-slot:suffix>
                <el-button
                  round
                  size="small"
                  plain
                  class="pcp-btn"
                  @click="unbound('mob')"
                  >解绑</el-button
                >
                <el-button
                  round
                  size="small"
                  plain
                  class="pcp-btn"
                  @click="modifyMobVisible = true"
                  >更改
                </el-button>
              </template>
            </qf-sv>
          </div>
        </div>
      </div>

      <el-dialog
        title="更改微信"
        :visible.sync="modifyWeChatVisible"
        width="580px"
        class="custom-profile-el-dialog"
        @close="onModifyWeChatClose"
      >
        <div>
          <qf-step
            :data="['验证身份', '绑定新微信', '更改完成']"
            v-model="modifyWeChatStepActiveIndex"
          >
            <qf-step-item v-if="modifyWeChatStepActiveIndex == 0">
              <div
                class="modifiy-step ms-1 text-center"
                v-if="modifyWeChatStepActiveIndex == 0"
              >
                <div v-if="modifyWeChatStepWhetherCode" class="qrcode">
                  <div class="title">请使用您账号绑定的微信扫描二维码</div>
                  <div class="qr-code-box">
                    <!-- <div class="qrcode-shade">
                                        <div class="qrcode-shade-content text-center">
                                            <div>二维码已过期</div>
                                            <a class="red">刷新</a>
                                        </div>

                                        <div class="qrcode-shade-content text-center">
                                            <div>验证失败</div>
                                            <a class="red">重试</a>
                                        </div>

                                        <div class="qrcode-shade-content text-center oyx">
                                            <div>验证成功！正在为您跳转...</div>
                                            <i class="iconfont icon-jiazailoading-A ani-loading inline-block"></i>
                                        </div>

                                    </div> -->
                    <img src="/assets/img/login/test-qrcode.png" alt="二维码" />
                  </div>
                  <div class="tip">
                    微信无法验证？
                    <a @click="modifyWeChatStepWhetherCode = false"
                      >手机号验证</a
                    >
                  </div>
                </div>
                <div v-if="!modifyWeChatStepWhetherCode" class="phone">
                  <div class="title">
                    <span class="gray">请输入绑定手机</span>
                    <span class="black">{{
                      '18000218161' | 'hide-number'
                    }}</span>
                    <span class="gray">获取短信验证码</span>
                    <a
                      class="is-link"
                      @click="modifyWeChatStepWhetherCode = true"
                      >点此微信扫码验证</a
                    >
                  </div>

                  <div class="display-flex">
                    <div class="flex-1" style="margin-right:20px;">
                      <qf-input
                        placeholder="请输入验证码"
                        :prefix-style="{ 'margin-right': '10px' }"
                      >
                        <template v-slot:prefix>
                          <i class="iconfont icon-shenfenrenzheng"></i>
                        </template>
                      </qf-input>
                    </div>
                    <button type="button" class="send-code-btn">
                      获取验证码
                    </button>
                  </div>

                  <div class="text-center">
                    <el-button
                      type="primary"
                      round
                      size="medium"
                      @click="modifyWeChatStepActiveIndex++"
                      >下一步
                    </el-button>
                  </div>
                </div>
              </div>
            </qf-step-item>
            <qf-step-item v-if="modifyWeChatStepActiveIndex == 1">
              <div
                class="modifiy-step ms-2  text-center"
                v-if="modifyWeChatStepActiveIndex == 1"
              >
                <div class="title">请绑定您的新微信</div>
                <div class="qr-code-box">
                  <img src="/assets/img/login/test-qrcode.png" alt="二维码" />
                </div>
                <div class="tip">
                  扫描二维码完成绑定
                </div>
              </div>
            </qf-step-item>
            <qf-step-item v-if="modifyWeChatStepActiveIndex == 2">
              <div
                class="modifiy-step ms-3 text-center"
                v-if="modifyWeChatStepActiveIndex == 2"
              >
                <i class="iconfont icon-chenggong"></i>

                <p>您的微信号已更改成功！</p>

                <el-button
                  type="primary"
                  round
                  size="medium"
                  @click="modifyWeChatVisible = false"
                  >我知道了
                </el-button>
              </div>
            </qf-step-item>
          </qf-step>
        </div>
        <span slot="footer" class="dialog-footer">
          <div class="text-center">
            TODO {{ modifyWeChatStepActiveIndex }}:
            <el-button
              type="primary"
              round
              size="medium"
              @click="modifyWeChatStepActiveChange('prev')"
              >上一步</el-button
            >
            <el-button
              type="primary"
              round
              size="medium"
              @click="modifyWeChatStepActiveChange('next')"
              >下一步
            </el-button>
          </div>
        </span>
      </el-dialog>

      <el-dialog
        title="更改手机"
        :visible.sync="modifyMobVisible"
        width="580px"
        class="custom-profile-el-dialog"
        @close="onModifyMobClose"
      >
        <div>
          <qf-step
            :data="['验证身份', '绑定新手机', '更改完成']"
            v-model="modifyMobStepActiveIndex"
            class="modify-phone"
          >
            <qf-step-item v-if="modifyMobStepActiveIndex == 0">
              <div
                class="modifiy-step ms-1 text-center"
                v-if="modifyMobStepActiveIndex == 0"
              >
                <div v-if="modifyMobStepWhetherCode" class="qrcode">
                  <div class="title">请使用您账号绑定的微信扫描二维码</div>
                  <div class="qr-code-box">
                    <!-- <div class="qrcode-shade">
                                        <div class="qrcode-shade-content text-center">
                                            <div>二维码已过期</div>
                                            <a class="red">刷新</a>
                                        </div>

                                        <div class="qrcode-shade-content text-center">
                                            <div>验证失败</div>
                                            <a class="red">重试</a>
                                        </div>

                                        <div class="qrcode-shade-content text-center oyx">
                                            <div>验证成功！正在为您跳转...</div>
                                            <i class="iconfont icon-jiazailoading-A ani-loading inline-block"></i>
                                        </div>

                                    </div> -->
                    <img src="/assets/img/login/test-qrcode.png" alt="二维码" />
                  </div>
                  <div class="tip">
                    微信无法验证？
                    <a @click="modifyMobStepWhetherCode = false">手机号验证</a>
                  </div>
                </div>
                <div v-if="!modifyMobStepWhetherCode" class="phone">
                  <div class="title">
                    <span class="gray">请输入绑定手机</span>
                    <span class="black">{{
                      '18000218161' | 'hide-number'
                    }}</span>
                    <span class="gray">获取短信验证码</span>
                    <a class="is-link" @click="modifyMobStepWhetherCode = true"
                      >点此微信扫码验证</a
                    >
                  </div>

                  <div class="display-flex">
                    <div class="flex-1" style="margin-right:20px;">
                      <qf-input
                        placeholder="请输入验证码"
                        :prefix-style="{ 'margin-right': '10px' }"
                      >
                        <template v-slot:prefix>
                          <i class="iconfont icon-shenfenrenzheng"></i>
                        </template>
                      </qf-input>
                    </div>
                    <button type="button" class="send-code-btn">
                      获取验证码
                    </button>
                  </div>

                  <div class="text-center">
                    <el-button
                      type="primary"
                      round
                      size="medium"
                      @click="modifyMobStepActiveIndex++"
                    >
                      下一步
                    </el-button>
                  </div>
                </div>
              </div>
            </qf-step-item>
            <qf-step-item v-if="modifyMobStepActiveIndex == 1">
              <div
                class="modifiy-step ms-2 text-center"
                v-if="modifyMobStepActiveIndex == 1"
              >
                <div>
                  <qf-input
                    placeholder="请输入手机号"
                    :prefix-style="{ 'margin-right': '10px' }"
                  >
                    <template v-slot:prefix>
                      <i class="iconfont icon-shoujihaoxiugai"></i>
                    </template>
                  </qf-input>
                </div>
                <div class="display-flex">
                  <div class="flex-1" style="margin-right:20px;">
                    <qf-input
                      placeholder="请输入验证码"
                      :prefix-style="{ 'margin-right': '10px' }"
                    >
                      <template v-slot:prefix>
                        <i class="iconfont icon-shenfenrenzheng"></i>
                      </template>
                    </qf-input>
                  </div>
                  <button type="button" class="send-code-btn">
                    获取验证码
                  </button>
                </div>
              </div>

              <div class="text-center">
                <el-button
                  type="primary"
                  round
                  size="medium"
                  @click="modifyMobStepActiveIndex++"
                >
                  下一步
                </el-button>
              </div>
            </qf-step-item>
            <qf-step-item v-if="modifyMobStepActiveIndex == 2">
              <div
                class="modifiy-step ms-3 text-center"
                v-if="modifyMobStepActiveIndex == 2"
              >
                <i class="iconfont icon-chenggong"></i>

                <p>您的手机号已更改成功！</p>

                <el-button
                  type="primary"
                  round
                  size="medium"
                  @click="modifyMobVisible = false"
                  >我知道了
                </el-button>
              </div>
            </qf-step-item>
          </qf-step>
        </div>
        <!-- <span slot="footer" class="dialog-footer">
                <div class="text-center">
                    {{modifyMobStepActiveIndex}}
                    TODO: <el-button type="primary" round size="medium" @click="modifyMobStepActiveIndex--">上一步
                    </el-button>
                    <el-button type="primary" round size="medium" @click="modifyMobStepActiveIndex++">下一步</el-button>
                </div>
            </span> -->
      </el-dialog>

      <el-dialog
        title="解绑微信"
        :visible.sync="unboundVisible"
        width="580px"
        class="custom-profile-el-dialog"
      >
        <div class="unbinding-dialog">
          <p>为保证您的账号安全，请填写以下验证信息</p>

          <qf-input
            placeholder="请输入账号关联身份证号"
            :prefix-style="{ 'margin-right': '10px' }"
          >
            <template v-slot:prefix>
              <i class="iconfont icon-jiekuanrenshenfenzhengxinxixiugai"></i>
            </template>
          </qf-input>

          <qf-input
            placeholder="请输入账号关联执业证号"
            :prefix-style="{ 'margin-right': '10px' }"
          >
            <template v-slot:prefix>
              <i class="iconfont icon-gongjijindaikuanjieqingzhengming"></i>
            </template>
          </qf-input>
        </div>

        <div class="text-center">
          <el-button type="danger" size="medium">解除绑定</el-button>
        </div>
      </el-dialog>

      <el-dialog
        title="解绑成功"
        :visible="unboundSuccessVisible"
        width="580px"
        class="custom-profile-el-dialog"
      >
        <div>
          <i class="iconfont icon-chenggong"></i>

          <p>您的手机号已更改成功！</p>

          <el-button type="primary" round size="medium">我知道了</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import QfSv from '../../components/sv/index.vue';

export default {
  name: 'Profile',
  components: {
    QfSv
  },
  data() {
    return {
      // wechat
      modifyWeChatVisible: false,
      modifyWeChatStepActiveIndex: 0,
      modifyWeChatStepWhetherCode: true,
      // mob
      modifyMobVisible: false,
      modifyMobStepActiveIndex: 0,
      modifyMobStepWhetherCode: true,
      //
      unboundVisible: false,
      unboundSuccessVisible: false
    };
  },
  methods: {
    confirmCancelJoinLawOffice() {
      console.log(this);
      this.$message(`confirmCancelJoinLawOffice`);
    },
    modifyWeChatStepActiveChange(behavior) {
      let index = this.modifyWeChatStepActiveIndex;
      console.log(index);
      if (behavior == 'prev') {
        if (index == 0) return;
        this.modifyWeChatStepActiveIndex--;
      } else {
        if (index == 2) {
          index = 3;
          return;
        }
        this.modifyWeChatStepActiveIndex++;
      }
    },
    onModifyWeChatClose() {
      this.modifyWeChatStepActiveIndex = 0;
      this.modifyWeChatStepWhetherCode = true;
    },
    onModifyMobClose() {
      this.modifyMobStepActiveIndex = 0;
      this.modifyMobStepWhetherCode = true;
    },
    unbound() {
      this.unboundVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.person {
  &-center {
    width: 800px;
    margin: 30px auto 0 auto;

    &-title {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      line-height: 28px;
      margin-bottom: 30px;
    }

    &-panel {
      position: relative;
      background: #fff;
      width: 800px;
      padding: 50px 0 0 0;

      &-logo {
        position: absolute;
        width: 176px;
        height: 80px;
        border-radius: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50%;
        left: -88px;
        top: -52px;
        background: url('/src/assets/image/half-circle.png') center center
          no-repeat;

        &-bg {
          position: absolute;
          width: 80px;
          height: 80px;
          background: rgba(82, 133, 248, 1);
          border-radius: 50%;
          top: 10px;
        }

        &-text {
          font-size: 22px;
          font-weight: 500;
          color: #fff;
          z-index: 1;
          margin-top: 18px;
        }
      }

      &-title {
        padding-left: 34px;

        &::before {
          content: '';
          display: inline-block;
          width: 3px;
          height: 14px;
          background: #3281ec;
          border-radius: 0px 2px 2px 0px;
          margin-right: 10px;
          position: relative;
          top: 1px;
        }

        font-size: 16px;
        font-weight: 500;
        color: #333;
        line-height: 28px;
      }

      &-body {
        padding: 40px;
      }
    }
  }
}

.ls-audit-icon {
  position: absolute;
  right: 117px;
  color: #f35050;
  font-size: 60px;
  top: 0;
  margin-top: -16px;
}

.steps-body {
  margin-bottom: 20px;
}

.modifiy-step {
  &.ms-1 {
    margin-top: 40px;

    .title {
      font-size: 16px;
      margin-bottom: 24px;
    }

    .qr-code {
      &-box {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        border: 1px solid rgba(245, 247, 250, 1);
        padding: 5px;
        margin-bottom: 24px;

        > img {
          display: block;
          max-width: 100%;
        }
      }

      &-shade {
        position: absolute;
      }
    }

    .tip {
      font-size: 14px;
      color: rgba(115, 120, 128, 1);

      > a {
        color: rgba(66, 128, 249, 1);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .oyx {
      > div {
        margin-bottom: 20px;
        font-size: 16px;
      }

      .iconfont {
        font-size: 34px;
      }
    }

    .phone {
      padding: 0 38px;
    }
  }

  &.ms-2 {
    margin-top: 40px;

    .title {
      font-size: 16px;
      margin-bottom: 24px;
    }

    .qr-code {
      &-box {
        position: relative;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        border: 1px solid rgba(245, 247, 250, 1);
        padding: 5px;
        margin-bottom: 24px;

        > img {
          display: block;
          max-width: 100%;
        }
      }

      &-shade {
        position: absolute;
      }
    }

    .tip {
      font-size: 14px;
      color: rgba(115, 120, 128, 1);

      > a {
        color: rgba(66, 128, 249, 1);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &.ms-3 {
    margin-top: 40px;

    > .icon-chenggong {
      display: inline-block;
      width: 50px;
      height: 50px;
      font-size: 50px;
      margin-bottom: 24px;
      line-height: 1;
      border-radius: 50%;
      color: rgba(69, 197, 114, 1);
      box-shadow: 0px 2px 4px 0px rgba(69, 197, 114, 0.38);
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: #333;
      line-height: 1;
      margin-bottom: 30px;
    }
  }
}

&.modify-phone {
  .ms-2 {
    padding: 0 70px;
  }
}

.custom-profile-el-dialog {
  .el-dialog__body {
    padding-top: 0;
  }
}

.unbinding-dialog {
  padding: 0 60px;

  > p {
    font-size: 18px;
    font-weight: 400;
    color: #343;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
