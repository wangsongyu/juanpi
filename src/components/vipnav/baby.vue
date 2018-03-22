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

<script>

import axios from 'axios'
import router from '../../router/index.js'
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		mounted(){
			axios.get('/api/getSupermarketGoods?cid=3077&page=1&zhouyi_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&source=sumarket').then(res=>{
				console.log(res)
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

<style lang="scss" scpped>
	

</style>