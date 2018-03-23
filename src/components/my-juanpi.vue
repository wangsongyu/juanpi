<template>
	<div id="box">
		<header>
			<div class="title">
				<a href="javascript:;">
					<i class="iconfont icon-jiantou1"></i>
				</a>
				<span>个人中心</span>
			</div>
			<div class="login">
				<router-link tag="a" to="/register">注册</router-link>
				<span> | </span>
				<router-link tag="a" to="/login">登陆</router-link>
			</div>
		</header>
		<div class="order">
			<div class="orderbox">
				<div class="myorder">
					我的订单
				</div>
				<div class="allorder">
					全部订单
				</div>
			</div>
		</div>
		<ul class="editlist" @click="handleClick">
			<li>
				<i class="iconfont icon-daifukuan"></i><br>
				<span>待付款</span>
			</li>
			<li>
				<i class="iconfont icon-daichengtuan"></i><br>
				<span>待成团</span>
			</li>
			<li>
				<i class="iconfont icon-daishouhuo"></i><br>
				<span>待收货</span>
			</li>
			<li>
				<i class="iconfont icon-tuikuan"></i><br>
				<span>退款/售后</span>
			</li>
		</ul>
		
		<ul class="mycard">
			<li>我的优惠券</li>
			<li>我的收藏</li>
			<li>我的拼团</li>
			<li>至尊会员卡<span class="tip">办理即享九折</span></li>
			<li>我的免单券<span class="tip">0张</span></li>
			<li>借钱<span class="tip">新用户免费领1000元</span></li>
		</ul>
		<ul class="server">
			<li>客服中心</li>
			<li>关于卷皮</li>
		</ul>
	</div>
	<!-- <section>
		<router-view></router-view>
	</section> -->
</template>


<script type="text/javascript">


	export default {
		name:'my-juanpi',
		data(){
			return{
				
			}
		},
		methods:{
			handleClick(){
				console.log('这是myjuanpi页面',this.$route.path)
			}
		}
	}

</script>


<style type="text/css" lang="scss" scoped>
#box{
	background:#f4f4f8
}
	header{
		height:144px;
		background:url('https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png') no-repeat center;
		width:100%;
		.title{
			display:flex;
			height:44px;
			text-align:center;
			line-height:44px;
			font-size:18px;
			color:white;
			a{
				width:15%;
				height:100%;

				i{
					font-size:20px;
					color:white;
				}
			}
			span{
				width:85%;
				height:100%;
				padding-right:10%
			}
		}
		.login{
			display:flex;
			padding:0 12%;
			a{	
				width:48%;
				text-align:center;
				font-size:20px;
				color:white;
				line-height:100px;
			}
			span{
				width:4%;
				font-size:20px;
				color:white;
				line-height:100px;
			}
		}
	}
	.order{
		padding:0 5%;
		height:50px;
		background:#fff;
		.orderbox{
			border-bottom:1px solid #ccc;
			display:flex;
			justify-content:space-between;
			height:49px;
			.myorder{
				width:20%;
				font-size:15px;
				line-height:50px;
				font-weight:500;
				color:#3e3e3e;
			}
			.allorder{
				width:20%;
				font-size:14px;
				line-height:50px;
				color:#999;
			}
		}
	}
	.editlist{
		display:flex;
		background:#fff;
		li{
			flex:1;
			text-align:center;
			height:60px;
			padding-top:20px;
			i{
				font-size:24px;
				font-weight:500;
				
			}
			span{
				font-size:12px;
				margin-top:10px;
				display:inline-block;
			}
		}
	}
	.mycard{

		margin:10px 0;
		padding:0 5%;
		background:#fff;
		li{
			border-bottom:1px solid #ccc;
			height:49px;
			line-height:49px;
			font-size:15px;
			.tip{
				float:right;
				font-size:12px;
				color:#999;
			}
		}
		li:last-of-type{
			border-bottom:0;
		}
	}
	.server{
		margin-bottom:65px;
		padding:0 5%;
		background:#fff;
		li{
			border-bottom:1px solid #ccc;
			height:49px;
			line-height:49px;
			font-size:15px;
		}
		li:last-of-type{
			border-bottom:0;
		}
	}

</style>