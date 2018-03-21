<template>
	<div id="box">
		<header>
			<img :src="topbannerBg">
		</header>

		<div class="search">
			<div class="boxsearch"></div>
			<span></span>
		</div>

		<swipe class="my-swipe">
		  <swipe-item v-for="data in loopList" :key="data.id" class="swiper">
		  	<img :src="data.pic">
		  </swipe-item>
		</swipe>

		<ul class="prolist1">
			<li v-for="data in prolist1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="prolist2">
			<li v-for="data in prolist2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<div class="ad">
			<img :src="ad">
		</div>
		<div class="ad2">
			<div v-for="data in ad2">
				<img :src="data.child[0].pic">
			</div>
		</div>
		<ul class="brand1">
			<li v-for="data in brand1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="brand1">
			<li v-for="data in brand2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="brand1">
			<li v-for="data in brand3">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<div class="ad3">
			<img :src="ad3">
		</div>
		<ul class="girls1">
			<li v-for="data in girls1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="girls2">
			<li v-for="data in girls2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<div class="life">
			<img :src="life">
		</div>
		<ul class="life1">
			<li v-for="data in life1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="life2">
			<li v-for="data in life2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<!-->++++++++<-->
		<div class="life">
			<img :src="man">
		</div>
		<ul class="life1">
			<li v-for="data in man1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="life2">
			<li v-for="data in man2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		 <div class="life">
			<img :src="baby">
		</div>
		<ul class="life1">
			<li v-for="data in baby1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="life2">
			<li v-for="data in baby2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<div class="life">
			<img :src="tec">
		</div>
		<ul class="life1">
			<li v-for="data in tec1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="life2">
			<li v-for="data in tec2">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<div class="life">
			<img :src="itn">
		</div>
		<ul class="life1">
			<li v-for="data in itn1">
				<img :src="data.child[0].pic">
			</li>
		</ul>
		<ul class="life2">
			<li v-for="data in itn2">
				<img :src="data.child[0].pic">
			</li>
		</ul> 
		<div class="ad4">
			<img :src="ad4">
		</div>
		<div :class="isFixed?'fixed navbox':'navbox'">
			<ul class="navlist" v-draglist>	
				<router-link tag="li" activeClass="activeCss" to="/home/recommend">推荐</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/women">女装</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/men">男装</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/food">美食</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/baby">母婴</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/shoes">鞋子</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/bra">内衣</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/beauty">美妆</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/sport">运动</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/homepro">居家</router-link>
				<router-link tag="li" activeClass="activeCss" to="/home/digital">数码</router-link>
			</ul>
		</div>

		<router-view></router-view>

		<div style="height:800px;width:100%;background:#f00;"></div>
	</div>

</template>


<script type="text/javascript">
import axios from 'axios'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue'

 Vue.directive("draglist",{
 	inserted(el,binging,vnode){
 		el.ontouchstart = function(ev){
 			var disX = ev.touches[0].clientX;
 			document.ontouchmove = function(ev){
 				var L = ev.touches[0].clientX - disX;
 				if(L>0){
 					L=0;
 				}else if(L<-(el.offsetWidth-el.parentNode.offsetWidth)){
 					L = -(el.offsetWidth-el.parentNode.offsetWidth);
 				}
				el.style.left = L + 'px';
 				document.ontouchend = function(){
 					document.ontouchmove = null;
 					document.ontouchend = null;
 				}
 			}

 		}
 	}

 })


	export default {
		name:'home',
		data(){
			return{
				loopList:[],
				topbannerBg:null,
				multi_block:[],
				prolist1:[],
				prolist2:[],
				ad:'',
				ad2:[],
				brand1:[],
				brand2:[],
				brand3:[],
				ad3:null,
				girls1:[],
				girls2:[],
				life:null,
				life1:[],
				life2:[],
				man:null,
				man1:[],
				man2:[],
				baby:null,
				baby1:[],
				baby2:[],
				tec:null,
				tec1:[],
				tec2:[],
				itn:null,
				itn1:[],
				itn2:[],
				ad4:null,
				navlist:[],
				isFixed:false
			}
		},
		mounted(){
			axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe").then(res=>{
				this.loopList = res.data.adsInfo.slide_ads.config.slide;
				// console.log(res.data);
				this.multi_block=res.data.adsInfo.block[0].multi_block;
				
				this.prolist1 = this.multi_block[0].data;
				this.prolist2 = this.multi_block[1].data;
				this.ad = this.multi_block[2].data[0].child[0].pic;
				this.ad2 = this.multi_block[3].data;
				this.brand1 = this.multi_block[4].data;
				this.brand2 = this.multi_block[5].data;
				this.brand3 = this.multi_block[6].data;
				this.ad3 = this.multi_block[7].data[0].child[0].pic;
				this.girls1 = this.multi_block[8].data;
				this.girls2 = this.multi_block[9].data;
				this.life = this.multi_block[10].data[0].child[0].pic
				this.life1 = this.multi_block[11].data;
				this.life2 = this.multi_block[12].data;
				this.man = this.multi_block[13].data[0].child[0].pic
				this.man1 = this.multi_block[14].data;
				this.man2 = this.multi_block[15].data;
				this.baby = this.multi_block[16].data[0].child[0].pic
				this.baby1 = this.multi_block[17].data;
				this.baby2 = this.multi_block[18].data;
				this.tec = this.multi_block[19].data[0].child[0].pic
				this.tec1 = this.multi_block[20].data;
				this.tec2 = this.multi_block[21].data;
				this.itn = this.multi_block[22].data[0].child[0].pic
				this.itn1 = this.multi_block[23].data;
				this.itn2 = this.multi_block[24].data;
				this.ad4 = this.multi_block[25].data[0].child[0].pic

				console.log(this.ad4);
			}).catch(error=>{
				// console.log(error)
			})

			axios.get("/jas/pagetag/page?unique=topbanner&cat_name=newest_zhe&zy_ids=c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&platform=m").then(res=>{
				// console.log(res.data.data.data.topbanner.pic_url);
				this.topbannerBg = res.data.data.data.topbanner.pic_url;
			})

			window.addEventListener('scroll',this.handleScroll)
		},
		components:{
		    'swipe': Swipe,
		    'swipe-item': SwipeItem

		  },
		  methods:{
		  	handleScroll(){
		  		var scrollTop = document.documentElement.scrollTop;
		  		var offsetTop = document.getElementsByClassName('ad4')[0].offsetTop;
		  		if(scrollTop>offsetTop){
		  			this.isFixed = true;
		  		}else{
		  			this.isFixed = false;
		  		}
		  		
		  	}
		  }
	}

</script>


<style type="text/css" lang="scss" scoped>
	#box{
		background:#f4f4f8;
	}
	.my-swipe {
	  height: 200px;
	 	img{
	 		width:100%;
	 		height:100%;
	 		display:block;
	 	}
	}
	
	header{
		img{
			width:100%;
			
		}
	}
	.search{
		width:100%;
		height:44px;
		display:flex;
		justify-content:flex-end;
		.boxsearch{
			width:80%;
			height:70%;
			border:0;
			margin-top:7px;
			border-radius:5px;
			background:#f2f2f2;
		}
		span{
			width:15%;
			height:44px;
			background:url('https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png') no-repeat center;
			background-size:80%;
		}
	}
	.prolist1{
		height:80px;
		width:100%;
		display:flex;
		border-bottom:1px solid #ccc;
		li{
			flex:1;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.prolist2{
		height:80px;
		width:100%;
		display:flex;
		border-bottom:1px solid #ccc;
		li{
			flex:1;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	.ad{
		img{
			width:100%;
		}
	}
	.ad2{
		display:flex;
		height:120px;
		width:100%;
		div{
			flex:1;
			img{
				width:100%;
			}
		}
	}
	.brand1{
		width:100%;
		height:60px;
		display:flex;
		li{
			flex:1;
			img{
				width:100%;
				height:100%;
			}
		}
	}
	
	.ad3{
		img{
			width:100%;
		}
	}
	.girls1{
		width:100%;
		display:flex;
		li{
			flex:1;
			img{
				width:100%;
			}
		}
	}
	.girls2{
		width:100%;
		display:flex;
		// padding-bottom:5px;
		border-bottom:1px dotted #ccc;
		li{
			flex:1;
			img{
				width:100%;
			}
		}
	}
	.life{
		img{
			width:100%;
		}
	}
	.life1{
		width:100%;
		display:flex;
		li{
			flex:1;
			img{
				width:100%;
			}
		}
	}
	.life2{
		width:100%;
		display:flex;
		// padding-bottom:5px;
		border-bottom:1px dotted #ccc;
		li{
			flex:1;
			img{
				width:100%;
			}
		}
	}
	.ad4{
		margin:10px 0px;
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
	.fixed{
		position:fixed;
		top:0;
		left:0;
	}

	.activeCss{
		border-bottom:2px solid #ff464e;
	}

	

</style>