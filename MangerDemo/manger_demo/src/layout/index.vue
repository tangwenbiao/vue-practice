<template>
  <div class="layout">
    <!--左侧栏-->
    <SideBarMain class="side-bar-main"></SideBarMain>
    <!--顶部栏-->
    <div>
      <div class="top-bar">
        <el-button type="danger" round class="log-out" @click="logout">退出</el-button>
        <el-button @click="toChange" class="revers-bar">切换隐藏</el-button>
      </div>
      <!--内容-->
      <div>
        <router-view name="context"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarMain from "@/components/SideBar/SideBarMain";
import { toLogout } from "@/api/login.js";
import SideModules from "../store/modules/SideBarModule";
export default {
  name: "Layout",
  components: { SideBarMain },
  methods: {
    logout: function() {
      toLogout(this.$router);
    },
    toChange() {
      SideModules.commit("clickHidden");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  width: 100%;
  position: relative;
  .revers-bar {
    float: right;
  }
  .top-bar {
    .log-out {
      float: right;
    }
  }
}
</style>