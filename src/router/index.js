import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/Admin/IndexView.vue'
import ProductsView from '../views/ProductsView.vue'
import Detail from '../views/DetailView.vue';
import AboutView from '../views/AboutView.vue';
import NewsView from '../views/NewsView.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: IndexView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/CartView.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router