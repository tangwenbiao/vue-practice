<template>
    <div id="SimpleHome">
        <ol>
            <li>
                <router-link to="/simple/instance">simple_instance</router-link>
            </li>
        </ol>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'SimpleModel',
    data(){
    return {msg:"Simple!!!!",port: this.GLOBAL_CONFIG.port}
    }    
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>