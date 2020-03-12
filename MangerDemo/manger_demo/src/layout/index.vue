<template>
  <div class="layout">
    <SideBarMain></SideBarMain>
    <div>
      <div class="top-bar">
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
export default {
  name: "Layout",
  components: { SideBarMain },
  methods: {
    logout: function() {
      toLogout(this.$router);
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