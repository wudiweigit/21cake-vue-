import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Center from '@/components/center'
import ProductDetail from '@/page/productDetail'
import Cart from '@/page/cart'
import Sort from '@/page/sort'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      component: Center
    },
    {
      path:'/productdetail',
      component: ProductDetail
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/sort',
      component: Sort
    }
  ]
})
