<template>
  <div class="sidebar-box">
    <el-scrollbar wrap-class="scroll-bar-wrapper">
      <!--collapse-transaction 是否开启折叠动画。没太大用-->
      <!--主体样式-->
      <el-menu 
        @open="handleOpen"
        :background-color="variables.menuBg"
        :active-text-color="variables.menuActiveText"
        :text-color="variables.menuText"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transaction="false"
      >
        <!--子项目-->
        <sideBarItem
          v-for="item in permission_routes"
          :key="item.path"
          :item="item"
          :barHidden="barHidden"
        ></sideBarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from "@/style/variables.scss";
import sideBarItem from "./SideBarItem";
import permissionRouter from "../../store/modules/PermissionModule.js";

export default {
  name: "SideBarMain",
  components: {
    sideBarItem
  },
  computed: {
    permission_routes: permissionRouter.getters.getRoutes,
    barHidden() {
      return this.$store.state.side.barHidden;
    },
    variables() {
      return variables;
    }
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
