<template>
    <VuePerfectScrollbar id="login">
        <header class="header">
            <img src="../../assets/img/login/logo.png" alt="">
            <span>数据流通平台</span>
        </header>
        <section class="main">
            <div class="loginBox" @keydown.enter="login">
                <ul>
                    <li>后台登录</li>
                    <li class="clear"><span class="fl">用户名</span><input v-model="username" class="fl" type="text" placeholder="请输入用户名"></li>
                    <li class="clear"><span class="fl">密&nbsp;&nbsp;&nbsp;&nbsp;码</span><input v-model="password" class="fl" type="password" placeholder="请输入用户名"></li>
                    <li><button @click="login">登录</button></li>
                </ul>
            </div>
        </section>
    </VuePerfectScrollbar>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import { api_login } from "~/api/getData"

    export default {
        name: "login",
        components: {VuePerfectScrollbar},
        data() {
            return{
                username: null,
                password: null
            }
        },
        methods: {
            async login() {
                if(this.username && this.password){
                    let data;
                    data = await api_login(this.username,this.password);
                    data.data.status === 0 && this.$message.error('错了哦，用户名或密码错误');
                    if(data.data.status === 0){
                        this.$message.error('错了哦，用户名或密码错误');
                    }else{
                        this.$message.success('登录成功');
                        this.$router.push({path : '/platform/home'});
                    }

                }else{
                    this.$message.error('错了哦，用户名或密码不能为空');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #login{
        height: calc(100%);
        .header{
            height: 89px;
            line-height: 89px;
            background-color: #fff;
            color: #5a8bff;
            font-size: 24px;
            padding-left: 40px;
            img{
                vertical-align: top;
                margin-top: 31px;
                margin-right: 10px;
            }
        }
        .main{
            height: 991px;
            background: url('../../assets/img/login/loginBg.png');
            position: relative;
            .loginBox{
                position: absolute;
                top: 166px;
                left: 0;
                right: 0;
                margin: auto;
                width: 600px;
                height: 500px;
                background-color: #fff;
                box-shadow: 0 0 30px #aaa;
                ul{
                    width: 300px;
                    margin: auto;
                    li:nth-child(1){
                        height: 100px;
                        line-height: 100px;
                        background-color: #5a8bff;
                        color: #fff;
                        font-size: 36px;
                        text-align: center;
                        border-bottom-left-radius: 30px;
                        border-bottom-right-radius: 30px;
                        margin-bottom: 50px;
                    }
                    li:nth-child(2),li:nth-child(3){
                        height: 60px;
                        line-height: 60px;
                        border-bottom: 2px solid #e8ecf7;
                        margin-top: 30px;
                        span{
                            width: 80px;
                            font-size: 14px;
                        }
                        input{
                            height: 60px;
                            text-align: center;
                        }
                    }
                    li:nth-child(4){
                        margin-top: 70px;
                        button{
                            height: 50px;
                            width: 300px;
                            border-radius: 25px;
                            color: #fff;
                            font-size: 16px;
                            background-color: #5a8bff;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
