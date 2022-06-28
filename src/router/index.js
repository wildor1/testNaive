import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/Admin/IndexView.vue'
import NewView from '../views/Admin/NewView.vue'
import ProductsView from '../views/ProductsView.vue'
import EditView from '../views/Admin/EditView.vue'
import Detail from '../views/DetailView';
import AboutView from '../views/AboutView';

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: IndexView,
    children: [{
        path: 'new',
        name: 'New',
        component: NewView,
      },

      {
        path: 'edit/:id',
        name: 'Edit',
        component: EditView,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
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