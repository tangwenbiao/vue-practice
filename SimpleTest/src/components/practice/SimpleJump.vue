<template>
    <div>
        <button @click="jumpHome">跳转Home</button>
        <br/>
        <button @click="jumpOnline">跳转Baidu</button>
    </div>
</template>>

<script>
import router from '../../router/index'
import Nprogress from 'progress'

export default {
    name:"SimpleJump",
    methods:{
        jumpHome:function(){
            console.log("jump"),
            this.$router.push("/simple")
        },
        jumpOnline:function(){
            window.location.href="http://www.baidu.com"
        }
    }
}
</script>