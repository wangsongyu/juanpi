<template>
	<div>
		<ul>
			<li v-for="data in datalist">
				<span></span>
				<p class="vip"></p>
				<p>{{data.title}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

import axios from 'axios'
	
	export default {
		name:'recommend',
		data(){
			return{
				datalist:[]
			}
		},
		mounted(){
			axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj").then(res=>{
				console.log(res.data.data.goods)
				this.datalist=res.data.datagoods
			})
		}
	}

</script>


<style type="text/css" lang="scss" scoped>
	ul{
		height:2000px;
		display:flex;
		justify-content:space-between;
		li{
			width:50%;
		}
	} 


</style>