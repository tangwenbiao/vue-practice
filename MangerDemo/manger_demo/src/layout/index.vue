<template>
  <div class="layout">
    <SideBarMain class="side-bar-main"></SideBarMain>
    <div>
      <div class="top-bar">
        <el-button @click="toChange">切换隐藏</el-button>
        <el-button type="danger" round class="log-out" @click="logout">退出</el-button>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarMain from "@/components/SideBar/SideBarMain";
import { toLogout } from "@/api/login.js";
import SideModules from '../store/modules/SideBarModule'
export default {
  name: "Layout",
  components: { SideBarMain },
  methods: {
    logout: function() {
      toLogout(this.$router);
    },
    toChange(){
      SideModules.commit("clickHidden")
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>