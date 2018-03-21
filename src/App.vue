<template>
  <div>
  	<section>
		<router-view></router-view>
  	</section>
    <footernav></footernav>
  </div>
</template>

<script>
import footernav from './components/common/footer.vue'
export default {
  name: 'App',
  components:{
    footernav

  }
}
</script>

<style lang="scss">

body,html{
	width:100%;
	height:100%;
}
body,html,h1,h2,h3,h4,h5,h6,div,p,span,ul,li,dl,dt,dd,img,a,input{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
img{
  display: block;
  border: 0;
}
body{
  font-size: 12px;
  font-family:"微软雅黑";
  color: #3e3e3e;
}
header,footer,section,article,figure,figcaption,aside,nav{
  display: block;
}
a{
  text-decoration: none;
}


</style>
