import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import Recommend from '../components/homenav/recommend.vue'
import Women from '../components/homenav/women.vue'
import Men from '../components/homenav/men.vue'
import Food from '../components/homenav/food.vue'
import Baby from '../components/homenav/baby.vue'
import Shoes from '../components/homenav/shoes.vue'
import Bra from '../components/homenav/bra.vue'
import Beauty from '../components/homenav/beauty.vue'
import Sport from '../components/homenav/sport.vue'
import Homepro from '../components/homenav/homepro.vue'
import Digital from '../components/homenav/digital.vue'

import Vip from '../components/vip.vue'
import baby from '../components/vipnav/baby.vue'
import recommend from '../components/vipnav/recommend.vue'
import beautiful from '../components/vipnav/beautiful.vue'
import device from '../components/vipnav/device.vue'
import food from '../components/vipnav/food.vue'
import fruit from '../components/vipnav/fruit.vue'
import milk from '../components/vipnav/milk.vue'
import myhome from '../components/vipnav/myhome.vue'
import paper from '../components/vipnav/paper.vue'
import wine from '../components/vipnav/wine.vue'

import Classify from '../components/classify.vue'
import Cart from '../components/cart.vue'
import Detail from '../components/detail.vue'
import Myjuanpi from '../components/my-juanpi.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/home",
      component:Home,
      children:[

        {
          path:"recommend",
          component:Recommend
        },
        {
          path:"women",
          component:Women
        },
        {
          path:"men",
          component:Men
        },
        {
          path:"food",
          component:Food
        },
        {
          path:"baby",
          component:Baby
        },
        {
          path:"shoes",
          component:Shoes
        },
        {
          path:"bra",
          component:Bra
        },
        {
          path:"beauty",
          component:Beauty
        },
        {
          path:"sport",
          component:Sport
        },
        {
          path:"homepro",
          component:Homepro
        },
        {
          path:"digital",
          component:Digital
        }
      ]
    },
     {
      path: "/vip",
      redirect:'/vip/recommend',
      component:Vip,
      children:[
        {
          path:"recommend",
          component:recommend
        },
        {
          path:"baby",
          component:baby
        },
        {
          path:"beautiful",
          component:beautiful
        },
        {
          path:"device",
          component:device
        },
        {
          path:"food",
          component:food
        },
        {
          path:"fruit",
          component:fruit
        },
        {
          path:"milk",
          component:milk
        },
        {
          path:"myhome",
          component:myhome
        },
        {
          path:"paper",
          component:paper
        },
        {
          path:"wine",
          component:wine
        }
      ]
    },
     {
      path: "/classify",
      component:Classify
    },
     {
      path: "/cart",
      component:Cart
    },
     {
      path: "/my-juanpi",
      component:Myjuanpi
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/',
      redirect:"/home"
    }

  ]
})
