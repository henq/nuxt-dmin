<template>
    <div>
        <div class="search"></div>
        <Table :columns="columns" :data="data"></Table>
        <div class="pager"></div>
    </div>
</template>
<script>
export default {
    name:"Grid",
    props:{
        page:{
            type:Boolean,
            default:true
        },
        search:{
            type:object
        },
        columns:{
            type: Array,
            default:[]
        },
        url:{
            type:String
        },
        data:{
            type:Array
        }
    },
    data(){
        return {
            data:[]
        }
    }
}
</script>