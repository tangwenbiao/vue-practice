<template>
  <div>
    <div class="top-bar">
      <el-button type="danger" round class="log-out" @click="logout">退出</el-button>
    </div>
    <div>
      <p>hi,this is home!</p>
      <router-link to="/order">to order</router-link>
      <router-link to="/graph">to graph</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import {toLogout} from '@/api/login.js'
export default {
  name: "HomeView",
  methods:{
      logout:function(){
        toLogout(this.$router)
      }
  },
  mounted() {
    console.log("查看路由信息");
    console.log(this.$router);
  }
};
</script>

<style lang="scss" scoped>
.top-bar {
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 40px;
  height: 10%;
  .log-out {
    float: right;
  }
}
</style>