<template>
	<div class="all">
		<swipe class="my-swipe">
		  <swipe-item class="swiper">
		  	<img :src="headPic">
		  	<div class="btn"></div>
		  </swipe-item>
		</swipe>
		<div class="introduction">
			<div class="up">
				<span class="price"><i>￥</i>{{price}}</span>
				<span class="vipPrice">会员价{{vipPrice}}</span>
				<span class="free">包邮</span>
				<span class="allbuy">{{allbuy}}</span>
			</div>
			<div class="down">{{title}}</div>
		</div>
		<div class="vip">
			<div class="up">
				<span class="viplogo">会员</span>
				<span class="vipsport" v-vipsport="vipSport"></span>
			</div>
			<div class="down">
				
			</div>
		</div>
		
		<div class="popup" v-show="isShow">
			
		</div>
		<div class="foot" v-show="!isShow">
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">购物车</a></li>
				<li><a href="">立即购买</a></li>
				<li><a href="javascript:;" @click="handclick">加入购物车</a></li>
			</ul>
		</div>

	</div>	

</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
import Vue from 'vue'

	export default{
		data(){
			return{
				headPic:'',
				vipPrice:'',
				price:'',
				title:'',
				allbuy:'',
				vipSport:'',
				isShow:false
			}
		},
		components:{
		    'swipe': Swipe,
		    'swipe-item': SwipeItem

		},
		before(){

		},
		mounted(){
			console.log(this.$route.path);
			this.$store.dispatch('changeNewpathAction',this.$route.path);
			axios.get(`/api/getMemberAboutInfo?goods_id=${this.$route.params.id}&sa_id=15347379&is_pt_goods=0&req_coupons_id=${this.$route.params.id}`).then(res=>{
				console.log(res);
				this.headPic=res.data.skudata.info.goods_origin_url;
				this.vipPrice=res.data.skudata.info.vprice;
				this.price=res.data.skudata.info.sprice;
				this.title=res.data.skudata.info.goods_title;
				this.allbuy=res.data.skudata.info.join_number;
				this.vipSport=res.data.discount.vip_info.content
			})
		},
		methods:{
			handclick(){
				this.isShow=!this.isShow
			}

		}
		// ,
		// beforeDestroy(){
		// 	this.$store.dispatch('changeNewpathAction','111111');
		// }
	}

	Vue.directive('vipsport',function(el,binding){
		el.innerHTML=binding.value;
	})



</script>

<style lang="scss" scoped>
	.all{
		background:#f4f4f8;
		height:2000px;
	}
	.my-swipe {
		position:relative;
	 	height:370px;
	 	img{
	 		width:100%;
			height:100%;
	 		display:block;
	 	}
	 	.btn{
	 		width:30px;
	 		height:30px;
	 		background:rgba(0,0,0,.7);
	 		position:absolute;
	 		top:10px;
	 		right:15px;
	 		border-radius:50%
	 	}
	}
	.introduction{
		background:#fff;
		height:60px;
		width:90%;
		padding:5%;
		.up{
			display:flex;
			align-items: center;
			margin-top:5px;
			.price{
				font-size:22px;
				color:#ff464e;
				i{
					font-style:normal;
					font-size:16px;
				}
			}
			.vipPrice{
				display:inline-block;
				width:60px;
				margin-left:5px;
				padding:1px;
				background:#2f3345;
				color:#ffe8ab;
			}
			.free{
				padding:1px;
				margin-left:8px;
				width:26px;
				text-align:center;
				background:#ff464e;
				color:#fff;

			}
			.allbuy{
				margin-left:110px;
			}
		}
		.down{
			margin-top:5px;
			font-size:16px;
		}
	}
	.vip{
		margin-top:10px;
		width:100%;
		height:80px;
		background:#fff;
		.up{
			line-height:40px;
			width:90%;
			height:50%;
			padding-left:20px;
			.viplogo{
				color:#fff;
				background:#ff464e;
			}
			.vipsport{
				margin-left:5px;
			}
		
		
		}
		.down{
			widht:100%;
			height:50%;background:salmon;
		}
		
	}
	.popup{
		width:100%;
		height:150px;
		background:#0f0;
		position:fixed;
		bottom:0px;

	}
	.foot{
		text-align:center;
		width:100%;
		height:50px;
		line-height:50px;
		background:#ff0;
		position:fixed;
		bottom:0;
		left:0;
		ul{
			wdith:100%;
			text-align:center;
			li{
				width:24%;
				display:inline-block;
				a{
					display:block;
					width:100%;
				}
			}
		}
	}

</style>