<template>
  	<div>
<!--      <h3>item测试</h3>-->
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script setup>
import itemcontainer from '@/components/itemcontainer.vue'
import {onMounted} from "vue";
import {useDataStore} from '@/stores/data'
const dataStore=useDataStore()
onMounted(()=>{
   dataStore.timer()
   // console.log(dataStore)

})



</script>

<style lang="less">
    

</style>
