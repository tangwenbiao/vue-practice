<template>
    <div>
        <p>Simple model!!!</p>
        <ol>
            <li>
                <div>{{port}}</div>
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
