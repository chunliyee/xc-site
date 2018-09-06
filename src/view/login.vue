<template>
    <div class="login">
        <div class="container col-md-4 col-sm-12 col-xs-12">
            <div class="row">
                <div class="col-xs-12">
                    <form role="form" class="form-all col-xs-12" name="login">
                        <h2>{{title}}</h2>
                        <div class="form-group">
                            <label for="username" class="sr-only">Username</label>
                            <div class="col-xs-12">
                                <input type="text" class="form-control" id="username" placeholder="USERNAME" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="sr-only">Password</label>
                            <div class="col-xs-12">
                                <input type="password" class="form-control" id="password" placeholder="PASSWORD" autocomplete="off">
                            </div>
                        </div>
                        <div class="form-group">
                            <router-link tag="div" :to="forgetUrl" class="col-xs-12 forget-pwd" >{{forgetPwd}}</router-link>
                        </div>
                        <div class="col-xs-12">
                            <button class="btn btn-primary btn-block" @click="checkIdentify()">{{submit}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            title: 'SIGN IN',
            submit: '登录',
            userList: [],
            forgetUrl: '/forgetPwd',
            forgetPwd: '忘记密码'
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        getUserList() {
            const Vm = this
            Vm.$store.dispatch('getUserLists', {
            }).then(res => {
                console.log(res.data)
                this.userList = res.data
            })
        },
        checkIdentify() {
            let inputName = document.getElementById('username').value
            let inputPwd = document.getElementById('password').value
            let flag = 0
            for (let i = 0; i < this.userList.length; i++) {
                if (this.userList[i].name === inputName) {
                    flag = 1
                    if (this.userList[i].password === inputPwd) {
                        this.$router.push({ path: '/home' })
                    } else {
                        alert('用户名或密码错误')
                    }
                }
            }
            if (flag === 0) {
                alert('用户不存在')
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variable.less';

:focus {
    outline: 0 !important;
}
.login {
    // background: url('../assets/showImg.jpg') no-repeat;
    background-color: @mid-color-5;
    // background-size: 100% 100%;
    width: 100%;
    height: 100vh;
    -webkit-display:flex;
    display:flex;
    -webkit-align-items:center;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center;
    .container {
        // background-color: rgba(255, 255, 255, 0.8);
        .row {
            .col-xs-12 {
                .form-all {
                    padding: 15px;
                    margin-bottom: 20px;
                    background-color: rgba(255, 255, 255, 0.8);
                    border-radius: 1px;
                    -webkit-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
                    -moz-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
                    -o-box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
                    box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
                    h2 {
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-size: 20px;
                        margin: 0 0 30px 0;
                        color: #333;
                        padding-top: 10px;
                        padding-left: 15px;
                    }
                    .form-group {
                        input::-webkit-input-placeholder { 
                        /* WebKit browsers */ 
                        color: #aaa; 
                        } 
                        input:-moz-placeholder { 
                        /* Mozilla Firefox 4 to 18 */ 
                        color: #aaa; 
                        } 
                        input::-moz-placeholder { 
                        /* Mozilla Firefox 19+ */ 
                        color: #aaa; 
                        } 
                        input:-ms-input-placeholder { 
                        /* Internet Explorer 10+ */ 
                        color: #aaa; 
                        } 
                        .forget-pwd {
                            color: #007ACC;
                            cursor: pointer;
                        }
                        .forget-pwd:hover {
                            color: rgb(6, 98, 160);
                        }
                        .form-control {
                            color: #333;
                            background-color: inherit;
                            font-size: 16px;
                            font-weight: 300;
                            height: 50px;
                            padding-left: 0;
                            padding-right: 0;
                            margin-bottom: 20px;
                            border: none;
                            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                            -webkit-box-shadow: none;
                            -moz-box-shadow: none;
                            -o-box-shadow: none;
                            box-shadow: none;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                            -ms-border-radius: 0px;
                            border-radius: 0px;
                            -moz-transition: all 0.3s ease;
                            -o-transition: all 0.3s ease;
                            -webkit-transition: all 0.3s ease;
                            -ms-transition: all 0.3s ease;
                            transition: all 0.3s ease;
                        }
                        input:focus {
                            border-bottom: 1px solid rgba(0, 0, 0, 0.5);
                        }
                    }
                    .btn-primary {
                        background-color: rgb(51, 204, 204);
                        border: none;
                        box-shadow: -2px 10px 20px -1px rgba(51, 204, 204, 0.4);
                        margin-top: 20px;
                        margin-bottom: 20px;
                        height: 40px;
                    }
                    .btn-primary:hover {
                        background-color: rgb(32, 216, 216);
                    }
                }
            }
        }
    }
}
</style>

