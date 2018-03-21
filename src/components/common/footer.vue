<template>
	<footer>
		<ul @click="handleClick">
			<router-link tag="li" to="/home" class="homebg" activeClass="achome">首页</router-link>
			<router-link tag="li" to="/vip" class="vipbg" activeClass="acvip">会员商城</router-link>
			<router-link tag="li" to="/classify" class="classifybg" activeClass="acclassify">分类</router-link>
			<router-link tag="li" to="/cart" class="cartbg"  activeClass="accart">购物车</router-link>
			<router-link tag="li" to="/my-juanpi" class="myjuanpibg" activeClass="acmy">我的卷皮</router-link>
		</ul>
	</footer>

</template>

<script type="text/javascript">
import axios from 'axios';
	export default {
		name:'footernav',
		data(){
			return{
				bg:[]
			}
		},
		mounted(){
		
		},
		methods:{
			handleClick(){
				console.log('111')
			}
		}
	}	

</script>

<style type="text/css" lang="scss" scoped>
	footer{
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		ul{
			width:100%;
			display:flex;
			background:#fff;
			li{
				flex:1;
				text-align:center;
				height:30px;
				background:#eee;
				padding-top:35px;
				line-height:35px;
			}
		
			.homebg{
				background:url('https://s1.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png') no-repeat center 10px;
				background-size:35%;
			}
			.vipbg{
				background:url('http://s2.juancdn.com/bao/180112/2/9/5a589dfea9fcf882be25fb4c_72x72.png') no-repeat center 10px;
				background-size:35%;
			}
			.classifybg{
				background:url('http://s2.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png') no-repeat center 10px;
				background-size:35%;
			}
			.cartbg{
				background:url('http://s2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png') no-repeat center 10px;
				background-size:35%;
			}
			.myjuanpibg{
				background:url('http://s2.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png') no-repeat center 10px;
				background-size:35%;
			}
			.achome{
				background:url('https://s1.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png') no-repeat center 10px;
				background-size:35%;
				color:#f60;
			}.acvip{
				background:url('https://s1.juancdn.com/bao/180112/9/9/5a589e01a9fcf88dd41168b2_72x72.png') no-repeat center 10px;
				background-size:35%;
				color:#f60;
			}.acclassify{
				background:url('https://s1.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png') no-repeat center 10px;
				background-size:35%;
				color:#f60;
			}.accart{
				background:url('https://s1.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png') no-repeat center 10px;
				background-size:35%;
				color:#f60;
			}.acmy{
				background:url('https://s1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png') no-repeat center 10px;
				background-size:35%;
				color:#f60;
			}
		}
	}


</style>