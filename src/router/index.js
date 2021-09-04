import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout'

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index'),
        meta: { title: 'Inicio', icon: 'dashboard' },
      },
    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Systems',
    meta: { title: 'Mis Tiendas', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/table/index'),
        meta: { title: 'Table', icon: 'table' },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () =>
          import(/* webpackChunkName: "example" */ '@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' },
      },
    ],
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Departments',
        component: () =>
          import(/* webpackChunkName: "form" */ '@/views/form/index'),
        meta: { title: 'Departamentos', icon: 'form' },
      },
    ],
  },
  {
    path: '/tailwindcss',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Categories',
        component: () =>
          import(
            /* webpackChunkName: "tailwindcss" */ '@/views/tailwindcss/index'
          ),
        meta: { title: 'Categorias', icon: 'el-icon-magic-stick' },
      },
    ],
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Product',
    meta: {
      title: 'Productos',
      icon: 'nested',
    }
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
]

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: constantRoutes,
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    routes: constantRoutes,
  })
  router.matcher = newRouter.matcher // reset router
}
