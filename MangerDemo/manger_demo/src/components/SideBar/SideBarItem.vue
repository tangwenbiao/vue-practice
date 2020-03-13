<template>
  <div>
    <div v-if="!item.hidden&&!barHidden">
      <el-menu-item :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props:{
      item:{
          type:Object,
          require:true
      },
      barHidden:{
          type:Boolean,
          default(){
              return false;
          }
      }
  }
};
</script>