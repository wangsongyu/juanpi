<template>
	<div>
		<ul class="homenav_list">
			<li class="homenav_li" v-for="data in datalist">
				<img class="homenav_img" :src="data.pic_url" alt="">
				<span class="homenav_price">{{data.priceList[0].text}}</span>
				<span class="homenav_allprice">￥{{data.oprice}}</span>
				<span class="homenav_sport">{{data.priceList[1].text}}</span>
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
			axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj").then(res=>{
				console.log(res.data.data.goods)
				this.datalist=res.data.data.goods
			})
		}
	}

</script>


<style type="text/css" lang="scss">
	.homenav_list{
		display:flex;
		flex-flow:wrap;
		justify-content: space-between;
		.homenav_li{
			margin-top:5px;
			width:49.5%;
			
			.homenav_img{
				width:100%;
			}
			.homenav_price{
				display:inline-block;
				margin-top:10px;
				text-indent:5px;
				font-size:14px;
				color:#ff464e;
			}
			.homenav_allprice{
				color:#999;
				text-decoration:line-through;
			}
			.homenav_sport{
				display:block;
				color:#999;
				line-height:30px;
				text-indent:10px;
			}
			.homenav_vip{
				font-size:13px;
				text-indent:5px;
				margin-bottom:10px;
				color:#3b3b3b;
			}
		}
	} 


</style>