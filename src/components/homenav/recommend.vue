<template>
	<div>
		<ul class="homenav_list"
		 v-infinite-scroll="loadMore"
		 infinite-scroll-disabled="loading"
		 infinite-scroll-distance="10"
		 infinite-scroll-immediate-check=false
		 >
			<li class="homenav_li" v-for="data in datalist" @click="handClick(data.goods_id)">
				<img class="homenav_img" :src="data.pic_url" alt="">
				<span class="homenav_price">{{data.priceList[0].text}}</span>
				<span class="homenav_allprice">￥{{data.oprice}}</span>
				<span class="homenav_sport">{{data.priceList[1].text}}</span>
				<p class="homenav_vip">{{data.title}}</p>
			</li>
		</ul>
		<div class="loadingText">{{loadingText}}</div>
	</div>
</template>

<script type="text/javascript">

import axios from 'axios'
import { Indicator } from 'mint-ui'
import router from '../../router/index.js'	
	export default {
		name:'recommend',
		data(){
			return{
				datalist:[],
				loading:false,
				current:1,
				stop:'',
				loadingText:'正在加载...'
			}
		},
		mounted(){
			axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj").then(res=>{
				// console.log(res.data.data.goods)
				this.datalist=res.data.data.goods
			})
		},
		methods:{

			loadMore(){
				if(this.stop=='1'){
					Indicator.close()
					this.loadingText = '没有更多的了...'
					return
				}
				this.current++;
				axios.get(`/api/getGoods?page=${this.current}&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=newest_zhe`).then(res=>{
					console.log(res.data.data)
					 this.stop = res.data.data.has_more_page
					 this.datalist=[...this.datalist,...res.data.data.goods]

				})
				
			},
			
			handClick(id){
				router.push(`/detail/${id}`)
			}
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
	.loadingText{
		height:100px;
		width:100%;
		background:#fff;
		font-size:16px;
	}


</style>