<template>
  <div>
    <div v-if="!item.hidden&&!barHidden">
      <el-menu-item :index="item.path">
        <i :class="item.icon"></i>
        <router-link :to="'home'+item.path">{{item.title}}</router-link>
        <span slot="title"></span>
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
  },
  mounted(){
    console.log("测试数据")
    console.log(this.item)
  }
};
</script>