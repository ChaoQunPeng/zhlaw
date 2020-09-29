<template>
<header>
    <div class="header-layout">
        <div class="header-layout-item logo">
            <i class="iconfont icon-falvyuanzhu"></i>
            <span>智慧律师平台</span>
        </div>

        <div class="header-layout-item navbar">
            <div class="navbar-item" v-for="(item, index) in navbarItems" :key="index" @click="goUrl(item)">
                <span>
                    <i class="iconfont" :class="item.icon"></i>
                </span>
                <div>{{ item.text }}</div>
            </div>
        </div>

        <div class="header-layout-item search-bar">
            <div class="searchbar">
                <div class="search-input">
                    <el-input placeholder="请输入内容" value-key="id" v-model="content">
                        <el-select slot="prepend" v-model="selectContent" placeholder="请选择">
                            <el-option label="案件" value="1"></el-option>
                            <el-option label="法律法规" value="2"></el-option>
                            <el-option label="企业" value="3"></el-option>
                            <el-option label="利冲" value="4"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>

                <div class="notification">
                    <i class="iconfont icon-jiahao"></i>
                    <i class="iconfont icon-rili"></i>
                    <i class="iconfont icon-tixing"></i>
                </div>

                <div class="avatar">
                    <el-dropdown trigger="click" @visible-change="dropdownVisibleChange" placement="bottom">
                        <div class="avatar-box display-flex">
                            <div class="avatar-avatar">
                                张
                            </div>
                            <div class="avatar-panel">
                                <i class="iconfont icon-xia-1" :class="{ open: dropdownArrowStatus }"></i>
                            </div>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/profile">个人中心</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <a href="{:url('admin/index/logout')}">安全退出</a>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'HeaderLayout',
    data() {
        return {
            content: '',
            selectContent: '',
            // 控制三角箭头的样式
            dropdownArrowStatus: false,
            navbarItems: [{
                    icon: 'icon-baogao',
                    text: '日志',
                    url: ''
                },
                {
                    icon: 'icon-examine',
                    text: '审批',
                    url: ''
                },
                {
                    icon: 'icon-B',
                    text: '通讯录',
                    url: ''
                },
                {
                    icon: 'icon-jihuashu',
                    text: '文档',
                    url: ''
                },
                {
                    icon: 'icon-yuedu',
                    text: '联系人',
                    url: '{:url("admin/lawyer/lawyer/contact")}'
                },
                {
                    icon: 'icon-kehu',
                    text: '归档卷宗',
                    url: ''
                }
            ]
        }
    },
    methods: {
        dropdownVisibleChange(val) {
            this.dropdownArrowStatus = val
        },
        goUrl(item) {
            this.$router.push({
                path:'/contact'
            }).catch(err=>{});
        }
    }
}
</script>

<style lang="less" scoped>
@namespace: header-layout;

header {
    width: 100%;
}

@media (max-width: 1366px) {
  width: 1366px;
  margin: 0 auto;
}

.@{namespace} {
    display: flex;
    padding: 0 15px;
}

.@{namespace}-item {
    margin-right: 15px;
    background: #fff;
    box-shadow: 0px 1px 16px 0px rgba(65, 127, 249, 0.1);
    border-radius: 4px;
    height: 88px;

    &:last-child {
        margin-right: 0;
    }
}

.@{namespace}-item {
    &.logo {
        width: 252px;
        min-width: 252px;
        padding: 0 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;

        >.iconfont {
            font-size: 1.3em;
            color: #417ff9;
            line-height: 1;
            position: relative;
            top: 3px;

            &:last-child {
                margin-right: 0;
            }
        }

        >span {
            font-size: 1em;
            font-family: PingFang SC;
            font-weight: bold;
            color: #417ff9;
        }
    }

    &.navbar {
        display: flex;
        width: 456px;
        padding: 0 15px;

        .navbar-item {
            flex: 1;
            align-self: center;
            text-align: center;
            width: 70px;
            padding: 7px 0;
            transition: all 0.3s;
            cursor: pointer;

            &:hover {
                background: #f5f7fa;
                border-radius: 10px;

                >div {
                    color: #4280f9;
                }
            }

            >span {
                width: 26px;
                height: 26px;
                background: #eff1ff;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                margin-bottom: 10px;

                >.iconfont {
                    font-size: 13px;
                    color: #6877ed;
                }
            }

            >div {
                font-size: 12px;
            }
        }
    }

    &.search-bar {
       flex: 1;
    }

}

.searchbar {
    display: flex;
    padding: 25px 5px 25px 30px;
    align-items: center;

    .search-input {
        flex: 1;
        min-width: 330px;
        margin-right: 40px;

        /deep/ .el-input-group__prepend div.el-select .el-input__inner {
            height: 36px;
            line-height: 36px;
            border-right: 1px solid rgba(240, 240, 240, 1);
        }

        /deep/ .el-input__icon {
            line-height: 36px;
            width: 20px;
        }

        /deep/ .el-input-group>.el-input__inner {
          background-color: #F5F7FA;
          border-color: rgba(245, 245, 245, 1);

          &:focus {
            background: #fff;
          }
        }

        /deep/ .el-input-group__prepend {
            border-top-left-radius: 18px;
            border-bottom-left-radius: 18px;
            border-color: rgba(245, 245, 245, 1);
        }

        /deep/ .el-input-group__append {
            border-top-right-radius: 18px;
            border-bottom-right-radius: 18px;
            border-color: rgba(245, 245, 245, 1);
            border-right: 1px solid #DCDFE6;
        }

        /deep/ .el-input-group__prepend .el-select {
            width: 108px;
            border-top-left-radius: 18px;
            border-bottom-left-radius: 18px;
        }

        /deep/ .el-input--suffix .el-input__inner {
          padding-right: 20px;
        }

    }

    .notification {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;

        >.iconfont {
            font-size: 24px;
            margin-right: 40px;
            cursor: pointer;

            &:last-child {
                margin-right: 0;
            }

            &:hover {
                color: #417ff9;
            }
        }
    }

    .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        cursor: pointer;

        &-avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #5285f8;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            margin-right: 8px;
        }

        &-box {
            justify-content: center;
            align-items: center;
        }

        &-panel {
            >.iconfont {
                color: rgba(153, 153, 153, .4);
                font-size: 16px;
            }
        }
    }
}
</style>
