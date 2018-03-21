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
import Classify from '../components/classify.vue'
import Cart from '../components/cart.vue'
import Myjuanpi from '../components/my-juanpi.vue'

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
      component:Vip
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

  ]
})
