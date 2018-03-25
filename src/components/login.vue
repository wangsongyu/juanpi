<template>
	<div>
		<div class="title">
			<a href="javascript:;">
				<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee">
			</a>
			<span>登陆</span>
			<span class="right">
				<a href="javascript:;">注册</a>
			</span>
		</div>
		<ul class="loginway">
			<li>卷皮账号登陆</li>
			<li>手机快捷登陆</li>
		</ul>
		<div class="text">
			<div>
				<input type="text" name="phonenum" placeholder="手机号/邮箱/用户名" v-model="pn">
			</div>

			<div>
				<input type="password" name="password" placeholder="密码" v-model="pw">
			</div>
			<div class="btn">
				<mt-button type="default" size="large" style="background:#dbdbdb;color:#fff;" @click.native="handleClick">登陆</mt-button>
			</div>
		</div>
		<!-- <div class="text">
			<div>
				<input type="text" name="phonenum" placeholder="手机号" >
			</div>
			<div>
				<input type="password" name="password" placeholder="密码">
			</div>
			<div class="btn">
				<mt-button type="default" size="large" style="background:#dbdbdb;color:#fff;">登陆</mt-button>
			</div>
		</div> -->
		<div class="forgetpw">
			<span @click="isChecked = !isChecked">
				<i>
					<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" v-show="isChecked">
				</i>
				两周内免登陆
			</span>
			<span>忘记密码？</span>
		</div>
		<div class="another">
			<h3>第三方账号快速登陆</h3>
			<ul>
				<li>
					<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee">
				</li>
				<li>
					<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee">
				</li>
				<li>
					<img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee">
				</li>
			</ul>
		</div>

	</div>


</template>


<script type="text/javascript">
import { Button } from 'mint-ui';
import axios from 'axios'
import router from '../router/index.js'
	export default {
		name:'login',
		data(){
			return {
				isChecked:false,
				pn:'',
				pw:''
			}
		},
		components:{
			'mt-button':Button
		},
		methods:{
			handleClick(){
				axios.post("/login",{phonenum:this.pn,password:this.pw}).then(res=>{
					if(res.data.status == 1){
						console.log(res.data)
						router.push("/my-juanpi");
					}
				})
				// console.log(this.pn,this.pw)
			}
		}
	}


</script>


<style type="text/css" lang="scss" scoped>
	
.title{
		display:flex;
		height:44px;
		text-align:center;
		line-height:44px;
		font-size:18px;
		color:#3e3e3e;
		border-bottom:1px solid #eee;
		background:#fe5f39;
		a{
			width:15%;
			height:100%;
			display:flex;
			color:white;
			img{
				width:50%;
				color:#3e3e3e;
				margin:auto;
			}
		}
		span{
			width:70%;
			height:100%;
			
			color:white;
		}
		.right{
			width:15%;
			height:100%;
			a{
				font-size:13px;
				width:100%;
				text-align:center;
				display:inline-block;
			}
		}
	}
	.loginway{
		display:flex;
		padding:0 5%;
		li{
			flex:1;
			text-align:center;
			line-height:50px;
			boxsizing:border-box;
			// border-bottom:2px solid #fe5f39;
			font-size:14px;
			color:#999;
		}
	}
	.text{
			padding:0 5%;
			
			background:#fff;
			div{
				margin-top:20px;
				border-bottom:1px solid #eee;
				height:49px;
				line-height:49px;
				font-size:15px;
				input{
					height:47px;
					border:0;
					outline:none;
					width:100%;
					font-size:14px;
					color:#999;
				}
				input::-webkit-input-placeholder{ /*WebKit browsers*/

				color: #999;

				}

				input::-moz-input-placeholder{ /*Mozilla Firefox*/

				color: #999;

				}

				input::-ms-input-placeholder{ /*Internet Explorer*/ 

				color: #999;

				}
				
			}
			.btn{
					border:0;
					margin-top:30px;
				}
			
		}
		.forgetpw{
			display:flex;
			justify-content:space-between;
			padding:0 5%;
			height:25px;
			span{
				width:30%;
				line-height:25px;
				text-align:center;
				font-size:13px;
				color:#999;
				i{
					width:10%;
					height:50%;
					border:1px solid #eee;
					line-height:23px;
					display:inline-block;
					
					img{
						width:100%;
						height:100%;
						background:#fe5f39;
					}
				}
			}
		}
		.another{
			margin-top:50px;
			padding:0 5%;
			h3{
				text-align:center;
				color:#999;
				font-weight:100;
				font-size:12px;
			}
			ul{
				margin-top:20px;
				text-align:center;
				width:100%;
				height:50px;
				// border-bottom:1px solid #eee;
				li{
					display:inline-block;
					width:16%;
					height:50px;
					margin:0 5%;
					img{
						width:100%;
						height:100%;
					}
				}
			}
		}


</style>