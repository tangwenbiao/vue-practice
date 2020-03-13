<template>
  <div>
    <Layout></Layout>
  </div>
</template>


<script>
import Layout from "@/layout";
export default {
  name: "HomeView",
  components: { Layout }
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