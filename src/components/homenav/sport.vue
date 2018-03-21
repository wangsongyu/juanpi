<template>
	<div>
		<ul class="homenav_list">
			<li class="homenav_li" v-for="data in datalist">
				<img class="homenav_img" :src="data.pic_url" alt="">
				<span class="homenav_price">{{data.priceList[0].text}}</span>
				<span class="homenav_allprice">￥{{data.oprice}}</span>
				<p class="homenav_vip">{{data.title}}</p>
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
			axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytab8&flag=xbsytab8").then(res=>{
				console.log(res.data.data.goods)
				this.datalist=res.data.data.goods
			})
		}
	}

</script>


<style type="text/css" lang="scss">


</style>