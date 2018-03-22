<template>
	<div id="box">
		<mt-popup
		  v-model="popupVisible"
		  popup-transition="popup-fade" style="width:50%;height:50px;line-height:50px;text-align:center;font-size:18px;font-weight:bold;border-radius:10px;color:red;">
		  注册成功
		</mt-popup>
		<div class="title">
			<a href="javascript:;">
				<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&sv=449ce9ee">
			</a>
			<span>注册</span>
		</div>
		<div class="text">
			<div>
				<input type="text" name="phonenum" placeholder="请输入手机号" v-model="pn">
			</div>
			<div>
				<input type="password" name="password" placeholder="密码:(6-16个数字、字母和符号组合)" v-model="pw">
			</div>
			<div class="btn">
				<mt-button type="default" size="large" @click.native="handleClick">注册</mt-button>
			</div>
		</div>

	</div>


</template>


<script type="text/javascript">
import { Button } from 'mint-ui';
import { Popup } from 'mint-ui';

import axios from 'axios'

	export default {
		name:'register',
		data(){
			return {
				pn:'',
				pw:'',
				popupVisible:false
			}
		},
		components:{
			'mt-button':Button,
			'mt-popup':Popup
		},
		methods:{
			handleClick(){
				axios.post("/register",{phonenum:this.pn,password:this.pw}).then(res=>{
					console.log(res.data);
					if(res.data.status == 1){
						this.popupVisible = true;
					}
				})
			}
		}
	}


</script>


<style type="text/css" lang="scss" scoped>

	#box{
		background:#f4f4f8;
	}

	.title{
			display:flex;
			height:44px;
			text-align:center;
			line-height:44px;
			font-size:18px;
			color:#3e3e3e;
			border-bottom:1px solid #eee;
			background:#fff;
			a{
				width:15%;
				height:100%;
				display:flex;
				img{
					width:50%;
					color:#3e3e3e;
					margin:auto;
				}
			}
			span{
				width:85%;
				height:100%;
				padding-right:10%
			}
		}
		.text{
			padding:0 5%;
			height:50px;
			background:#fff;
			div{
				margin-top:20px;
				border-bottom:1px solid #ccc;
				height:49px;
				line-height:49px;
				font-size:15px;
				input{
					height:47px;
					border:0;
					outline:none;
					width:100%;
				}
			}
			.btn{
				border:0;
				margin-top:50px;
			}
		}



</style>