<template>
	<div class="all">
		<swipe class="my-swipe">
		  <swipe-item v-for="image in swipeimage" :key="image.x_record" class="swiper">
		  	<img :src="image.pic">
		  </swipe-item>
		</swipe>
		<div class="offer">
			<a href="">
				<img :src="offer" alt="">
			</a>
		</div>
		<div class="newVip">
			<a href="">
				<img :src="newVip" alt="">
			</a>
		</div>
		<div class="con4">
			<img v-for="src in con4":src="src.pic" alt="">
		</div>
		<div class="con5">
			<img v-for="every in con5" :src="every.pic" alt="">
		</div>
		<div class="rush">
			<img :src="rush" alt="">
		</div>
		<div class="good">
			<img :src="good" alt="">
		</div>
		<div class="navbox">
			<ul class="navlist" v-draglist>	
				<router-link tag="li" activeClass="activeCss" to="/vipnav/recommend">推荐</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/paper">纸品</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/milk">牛奶</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/food">美食</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/baby">母婴</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/myhome">居家</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/wine">酒水</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/beautiful">美妆</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/device">电器</router-link>
				<router-link tag="li" activeClass="activeCss" to="/vipnav/fruit">水果</router-link>
			</ul>
		</div>
		<router-view></router-view>
	</div>

</template>


<script type="text/javascript">
import axios from 'axios'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import { Navbar, TabItem } from 'mint-ui';
	export default {
		name:'vip',
		data(){
			return{
				swipeimage:[],
				datalist:[],
				offer:'',
				newVip:'',
				con4:[],
				con5:[],
				rush:'',
				good:'',
				zonelist:[]
			}
		},
		mounted(){
			axios.get('/api/getSupermarketAds?cid=sumarket_sort&zy_ids=c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=').then(res=>{
				console.log(res.data.adsInfo.block[0].multi_block)
				this.datalist=res.data.adsInfo.block[0].multi_block
				this.swipeimage=res.data.adsInfo.block[0].multi_block[0].data.child
				this.offer=this.datalist[1].data[0].child[0].pic
				this.newVip=this.datalist[2].data[0].child[0].pic
				this.con4=this.datalist[3].data[0].child
				this.con5=this.datalist[4].data[0].child
				this.rush=this.datalist[5].data[0].child[0].pic
				this.good=this.datalist[6].data[0].child[0].pic
			})

			axios.get('/api/getSupermarketGoods?cid=sumarket_sort&page=1&zhouyi_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&source=sumarket').then(res=>{
				console.log(res.data.data.goods)
				this.zonelist=res.data.data.goods 
			})
		},
		components:{
		    'swipe': Swipe,
		    'swipe-item': SwipeItem

		}
	}

</script>


<style type="text/css" lang="scss" scoped>
.all{height:2000px;}
	.my-swipe {
	  height:150px;
	 	img{
	 		width:100%;
			height:100%;
	 		display:block;
	 	}
	}
	.offer{
		height:40px;
		width:100%;
		img{
			width:100%
		}
	}
	.newVip{
		display:flex;
		width:100%;
		height:180px;
		img{
			height:100%;
			width:100%
		}
	}
	.con4{
		display:flex;
		width:100%;
		height:110px;
		img{
			flex:1;
			width:50%;
		}
	}
	.con5{
		display:flex;
		width:100%;
		height:125px;
		img{
			width:33.3%
		}

	}
	.rush{
		width:100%;
		display:flex;
		height:80px;
		img{
			width:100%;
		}
	}
	.good{
		width:100%;
		display:flex;
		height:50px;
		img{
			width:100%;
		}
	}
	.navbox{
		width:100%;
		height:40px;
		background:#ff0;
		position:relative;
		overflow:hidden;
		.navlist{
			position:absolute;
			top:0;
			left:0;
			display:flex;
			width:160%;
			li{
				flex:1;
				text-align:center;
				line-height:40px;
				font-size:15px;
				font-weight:500;
			}
		}
	}
</style>