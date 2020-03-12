<template>
    <div class="login-container">
        <el-form :model='loginInfo' ref="loginInfo" class="login-box" :rules="loginRules">
            <div class="title">
                <h3>Login</h3>
            </div>
            <el-form-item prop="username">
                <el-input prefix-icon="el-icon-user" ref="username" type="text" placeholder="用户名" v-model="loginInfo.username" autocomplete=on tabindex="1" name="username">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="el-icon-lock" ref="password"  type="password" placeholder="密码" v-model="loginInfo.password" autocomplete="false">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {validNullStr} from '@/utils/validate'
import {toLogin,getRoutes} from '@/api/login'
import {addRoutes} from '@/utils/routerUtils'

export default {
    name:"Login",
    data(){
        //暂时未使用
        const validatedUserName=(rule,value,callback)=>{
            if(value=="a"){
                callback();
            }else{
                callback(new Error("测试错误"))
            }
        }
        return{
            loginRules:{
                username:
                [
                    {required:true,trigger:'blur',message:"不能为空!"}
                    
                ],
            },
            loginInfo:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login:function(){
            this.$refs.loginInfo.validate(valid=>{
                var userInfo;
                if(valid){
                    //判断是否登录成功
                    userInfo=toLogin(this.loginInfo,this.$router)
                }else{
                    console.log("失败");
                }
            });
        }
    },
    mounted(){
        if(this.loginInfo.username==""){
            this.$refs.username.focus();
        }else if(this.loginInfo.password==""){
            this.$refs.password.focus();
        }
    }
}
</script>
<style lang="scss">

.login-container{
    $light_gray:#fff;
    $cursor: #fff;
    $bg:#283443;
    .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    margin: 10px,10px;
    }
    
    .login-box{
        .el-input{
            .user{
                background: transparent;
            }
            input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 30px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor;
            width: 350px;
            &:-webkit-autofill {
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
    }
        }
        .title{
            text-align: center;
            color:#fff;
            font-weight: bold;
        }
    }

}
</style>

<style lang="scss" scoped>
$bg:#283443;
$width:400px;
$height:47px;
$dark_gray:#889aa4;
.login-container{
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .el-input{
        width: $width;
    }

    .login-box{
    margin: 0 auto;
    padding: 160px 35px 0;
    position: relative;
    width: 400px;

    .el-button{
        width: $width;
    }
    .password-suffix{
        width: 10px;
        background:$bg;
        margin: 0px;
        padding: 0px;
    }
    }
    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    
}
</style>