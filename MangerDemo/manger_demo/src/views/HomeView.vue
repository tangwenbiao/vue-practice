<template>
  <div>
    <Layout></Layout>
  </div>
</template>


<script>
import Layout from "@/layout";
export default {
  name: "HomeView",
  components: { Layout },
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