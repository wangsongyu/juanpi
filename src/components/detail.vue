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
				<span class="vipPrice">会员价￥{{vipPrice}}</span>
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
		<transition name="bounce">
			<div class="popup" v-show="isShow">
				<div class="con1">
					<img class="shopPic" :src="shopPic">
					<div class="choose">
						<span>333</span>
						<p>33333</p>
					</div>
					<span class="close" @click="handClose">X</span>
				</div>
				<div class="con2">
					<h2 class="chooseColor">{{zav}}</h2>
					<div class="fav">
						<div class="box" v-for="data in chooselist3" @click="changebg(data)" :class="{active:isActive == data}">
							<div class="up">{{data}}</div>
							<div class="down"></div>
						</div>
					</div>
					<h2 class="chooseFav">{{fav}}</h2>
					<div class="fav fav2">
						<div class="box" v-for="data in chooselist2" @click="changebg2(data)" :class="{active:isActive2 == data}">
							<div class="up">{{data}}</div>
							<div class="down"></div>
						</div>
					</div>
					<h2 class="chooseCount">
						<span>购买数量</span>
						<ul>
							<li @click="minusClick">-</li>
							<li>{{payCount}}</li>
							<li @click="addClick">+</li>
						</ul>
					</h2>
					<div class="confirmBtn" @click="confirm">
						确定
					</div>

				</div>
			</div>
		</transition>
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
				shopPic:'',
				vipPrice:'',
				price:'',
				title:'',
				allbuy:'',
				vipSport:'',
				isShow:false,
				fav:'',
				zav:'',
				chooselist:[],
				chooselist2:[],
				chooselist3:[],
				isActive:'',
				isActive2:'',
				payCount:1

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
				this.shopPic=res.data.skudata.info.goods_pic_url;
				this.vipPrice=res.data.skudata.info.vprice;
				this.price=res.data.skudata.info.sprice;
				this.title=res.data.skudata.info.goods_title;
				this.allbuy=res.data.skudata.info.join_number;
				this.vipSport=res.data.discount.vip_info.content;
				this.fav=res.data.skudata.info.fav_name;
				this.zav=res.data.skudata.info.zav_name;
				this.chooselist=res.data.skudata.sku;
				for(var i=0;i<this.chooselist.length;i++){
					if(this.chooselist2.indexOf(this.chooselist[i].av_fvalue)===-1){
						this.chooselist2.push(this.chooselist[i].av_fvalue);
					}
				}
				for(var i=0;i<this.chooselist.length;i++){
					if(this.chooselist3.indexOf(this.chooselist[i].av_zvalue)===-1){
						this.chooselist3.push(this.chooselist[i].av_zvalue);
					}
				}
				console.log(this.chooselist3)
			})
		},
		methods:{
			handclick(){
				this.isShow=!this.isShow
			},
			handClose(){
				this.isShow=!this.isShow
			},
			changebg(fvalue){
				this.isActive = fvalue;
				// console.log(this.isActive)
			},
			changebg2(fvalue){
				this.isActive2 = fvalue;
				// console.log(this.isActive)
			},
			minusClick(){
				this.payCount--
			},
			addClick(){
				this.payCount++
			},
			confirm(){
				console.log(this.isActive,this.isActive2,this.payCount);
				axios.post("/addcart",{goods_color:this.isActive,goods_size:this.isActive2,goods_count:this.payCount})
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
		// height:2000px;
	}
	.active{
		background:#ff464e;
		.up{
			color:#fff;
		}
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
		width:94%;
		padding:3%;
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
				width:80px;
				text-align:center;
				margin-left:5px;
				padding:1px;
				background:#2f3345;
				color:#ffe8ab;
			}
			.allbuy{
				color:#999;
				margin-left:135px;
			}
		}
		.down{
			text-indent:3px;
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
		height:60%;
		position:fixed;
		bottom:0px;
		background:white;
		.con1{
			background:#fff;
			width:100%;
			// height:70px;
			position:relative;
			.shopPic{
				display:block;
				width:100px;
				height:100px;
				position:absolute;
				top:-50px;
				left:15px;
			}
			.choose{
				margin-left:130px;
				width:100px;
				height:40px;
			}
			.close{
				position:absolute;
				right:10px;
				top:5px;
				font-size:22px;
				color:#bbb;
			}
		}
		.con2{
			padding:10px;
			width:100%;
			// height:300px;
			.chooseColor{
				font-weight:100;
			}
			.chooseFav{
				font-weight:100;
			}
			.chooseCount{
				font-weight:100;
				display:flex;
				margin-top:30px;
				span{
					width:70%;
				}
				ul{
					display:flex;
					width:30%;
					li{
						flex:1;
						font-size:14px;
					}
				}
			}
			.fav{
				padding:5px;
				width:100%;
				display:flex;
				flex-wrap:wrap;
				// height:40px;
				.box{
					overflow:hidden;
					margin-right:10px;
					height:30px;
					line-height:30px;
					// background:#fff;
					color:#000;
					width:28%;
					border:1px solid #000;
					text-align:center;
					margin-top:10px;
				}
			}
			.confirmBtn{
				width:100%;
				height:45px;
				line-height:45px;
				text-align:center;
				color:white;
				font-size:20px;
				background:#ff464e;
				position:absolute;
				bottom:0;
				left:0;
			}
			
		}

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
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform:translateY(100%);
	    opacity: 0;
	  }
	  100% {
	    transform:translateY(0px);
	    opacity: 1;
	  }
	}

</style>