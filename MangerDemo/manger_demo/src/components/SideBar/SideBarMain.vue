<template>
  <div class="sidebar-box">
    <el-scrollbar wrap-class="scroll-bar-wrapper">
      <!--collapse-transaction 是否开启折叠动画。没太大用-->
      <!--主体样式-->
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :background-color="variables.menuBg"
        :active-text-color="variables.menuActiveText"
        :text-color="variables.menuText"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transaction="false"
      >
        <!--子项目-->
        <sideBarItem></sideBarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import variables from "@/style/variables.scss";
import sideBarItem from "./SideBarItem";

//属性可以通过 computed暴露出来。然后在template中使用。
export default {
  name: "SideBarMain",
  components: {
    sideBarItem
  },
  computed: {
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