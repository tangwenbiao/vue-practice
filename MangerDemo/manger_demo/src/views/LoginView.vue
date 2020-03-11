<template>
    <div>
        <el-form :model='loginInfo' ref="loginInfo" label-width="100px">
            <el-form-item prop="username">
                <el-input ref="username" type="text" placeholder="username" v-model="loginInfo.username" autocomplete=on tabindex="1" name="username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginInfo.password" autocomplete="false"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            loginInfo:{
                username:'3',
                password:'4'
            }
        }
    }
}
</script>