<template>
    <div id="SimpleHome">
        <ol>
            <li v-for='node in nodes' :key='node.id'>
                <router-link v-bind:to="node.path">{{node.view}}</router-link>
            </li>
        </ol>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'SimpleModel',
    data(){
    return {
      msg:"Simple!!!!",
      port: this.GLOBAL_CONFIG.port,
      simpleRenderHtml:'<div id="testRender"></div>',
      nodes:[
        {
          path:'/simple/instance',
          view:'simple_instance'
        },
        {
          path:'/simple/render',
          view:'simple_render'
        },
        {
          path:'/simple/jump',
          view:'simple_jump'
        }
      ]
      }
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