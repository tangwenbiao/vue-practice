
<template>
    <div>
        <p>数值:{{count}}</p>
        <p>旧值:{{oldCount}},新值:{{newCount}}</p>
        <button v-on:click='see'>点我</button>
        <br/>
        <button v-bind:disable="isEnable">禁用</button>
        <p v-once>charge:{{count}}</p>
        <p v-bind:style="color">{{colorContext}}</p>
        <p>计算值:{{hundredCount}}</p>
        <p>当前时间:{{date}}</p>
        <br/>
    </div>
</template>

<script>
export default {
    name:'SimpleInstance',
    methods:{
        see: function(){
            this.$data.count+=1;
            this.color="color:green";
        },
        updateDate(){
            var newDate=Date.now();
            this.date=newDate,
            console.log("更新时间"+this.date)
        }
    },
    data(){
        return{
            count:1,
            newCount:0,
            oldCount:0,
            isEnable:false,
            colorHtml:'<div style="color:red">charging color</div>',
            date:Date.now(),
            dateId:null,
            color:"color:red",
            colorContext:"charging color!"
        }
    },
    watch:{
        'count':function(newValue,oldValue){
            this.newCount=newValue,
            this.oldCount=oldValue,
            this.colorHtml='<div style="color:green">charging color</div>',
            this.isEnable=!this.isEnable
        }
    },
    computed:{
        hundredCount:function(){
            return this.count*100;
        }
    },
    mounted(){
        this.dateId=setInterval(this.updateDate,1000)
    },
    beforeDestroy(){
        console.log("销毁");
        if(this.dateId!=null){
            console.log("触发！");
            clearInterval(this.dateId);
        }
    }
}
</script>
