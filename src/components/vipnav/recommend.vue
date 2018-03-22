<template>
	<div>
		<ul class="vipnav_list">
			<li class="vipnav_li" v-for="data in datalist" @click="handClick(data.goods_id)">
				<img class="vipnav_img" :src="data.pic_url" alt="">
				<a class="vipnav_title" href="">{{data.title_long}}</a>
				<div class="vipnav_down">
					<span class="vipnav_price">￥{{data.vprice}}</span><span class="vipnav_vip">至尊会员</span>
					<p class="vipnav_novip">非会员：￥{{data.oprice}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

import axios from 'axios'
import router from '../../router/index.js'
	export default {
		name:'recommend',
		data(){
			return{
				datalist:[],
			}
		},
		mounted(){
			axios.get("/api/getSupermarketGoods?cid=sumarket_sort&page=1&zhouyi_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&source=sumarket").then(res=>{
				console.log(res.data.data.goods)
				this.datalist=res.data.data.goods
			})
		},
		methods:{
			handClick(id){
				router.push(`/detail/${id}`)
			}

		}
	}

</script>


<style type="text/css" lang="scss">
	.vipnav_list{
		background:#eee;
		display:flex;
		flex-flow:wrap;
		justify-content:space-between;
		.vipnav_li{
			margin-top:3px;
			width:49.5%;
			background:#fff;
			
			.vipnav_img{
				width:100%;
			}
			.vipnav_title{
				color:#333;
				margin-left:8px;
				font-size:14px;
				height:40px;
				overflow:hidden;
				display:block;
			}
			.vipnav_down{
				margin-top:5px;
				margin-bottom:5px;
				.vipnav_price{
					margin-left:15px;
					text-align:center;
					display:inline-block;
					width:45px;
					color:#ffeebc;
					background-color:#282d39;
					border-radius:2px;
				}
				.vipnav_vip{
					display:inline-block;
					background-color:#282d39;
					color:#ffe38c;
					border-radius:2px;
					border-radius:2px;
					margin-left:4px;
				}
				.vipnav_novip{
					font-size:16px;
					text-indent:15px;
					line-height:18px;
				}
			}
			
		}
	} 


</style>