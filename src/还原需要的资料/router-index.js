// 引入 vue | vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 使用路由插件
Vue.use(Router)

/* 引入最外层骨架的一级路由组件Layout大的框架 */
import Layout from '@/layout'

// 路由的配置：为什么不同用户登录我们的项目，菜单显示都是一样的
// 因为目前的路由是死的，不管是哪个用户，能看见的，操作的都是一样
// 需要把项目中的路由进行拆分

// 常量路由：不管用户什么角色都可以看见的路由，没有权限区分
//  不管什么角色，都能看到登录，首页和404路由
export const constantRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index'),
  // 不在菜单栏展示
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/404'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/index'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '首页',
      icon: 'dashboard'
    }
  }]
},
{
  path: '/product',
  component: Layout,
  name: 'Product',
  meta: {
    title: '商品管理',
    icon: 'el-icon-goods'
  },
  children: [{
    path: 'trademark',
    name: 'TradeMark',
    component: () => import('@/views/product/tradeMark'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '品牌管理'
    }
  },
  {
    path: 'attr',
    name: 'Attr',
    component: () => import('@/views/product/Attr'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '平台属性管理'
    }
  },
  {
    path: 'spu',
    name: 'Spu',
    component: () => import('@/views/product/Spu'),
    // 设置在侧边栏展示的文字
    meta: {
      title: 'Spu管理'
    }
  },
  {
    path: 'sku',
    name: 'Sku',
    component: () => import('@/views/product/Sku'),
    // 设置在侧边栏展示的文字
    meta: {
      title: 'Sku管理'
    }
  }
  ]
},
{
  path: '/acl',
  component: Layout,
  redirect: '/acl/user/list',
  // 设置在侧边栏展示的文字
  meta: {
    title: '权限管理',
    icon: 'el-icon-lock'
  },
  children: [{
    path: 'user/list',
    name: 'User',
    component: () => import('@/views/acl/user/list'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '用户管理'
    }
  },
  {
    path: 'role/list',
    name: 'Role',
    component: () => import('@/views/acl/role/list'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '角色管理'
    }
  },
  {
    path: 'role/auth/:id',
    name: 'RoleAuth',
    component: () => import('@/views/acl/role/roleAuth'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '角色授权'
    },
    hidden: true
  },
  {
    path: 'permission/list',
    name: 'Permission',
    component: () => import('@/views/acl/permission/list'),
    // 设置在侧边栏展示的文字
    meta: {
      title: '菜单管理'
    }
  }]
},
// 404 页面必须在最后
{ path: '*', redirect: '/404', hidden: true }

]
// 异步路由：不同的用户(角色)，需要过滤筛选出的路由，称为异步路由
// export const asyncRoutes = [
//   {
//     path: '/product',
//     component: Layout,
//     name: 'Product',
//     meta: {
//       title: '商品管理',
//       icon: 'el-icon-goods'
//     },
//     children: [{
//       path: 'trademark',
//       name: 'TradeMark',
//       component: () => import('@/views/product/tradeMark'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '品牌管理'
//       }
//     },
//     {
//       path: 'attr',
//       name: 'Attr',
//       component: () => import('@/views/product/Attr'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '平台属性管理'
//       }
//     },
//     {
//       path: 'spu',
//       name: 'Spu',
//       component: () => import('@/views/product/Spu'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: 'Spu管理'
//       }
//     },
//     {
//       path: 'sku',
//       name: 'Sku',
//       component: () => import('@/views/product/Sku'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: 'Sku管理'
//       }
//     }
//     ]
//   },
//   {
//     path: '/acl',
//     component: Layout,
//     redirect: '/acl/user/list',
//     // 设置在侧边栏展示的文字
//     meta: {
//       title: '权限管理',
//       icon: 'el-icon-lock'
//     },
//     children: [{
//       path: 'user/list',
//       name: 'User',
//       component: () => import('@/views/acl/user/list'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '用户管理'
//       }
//     },
//     {
//       path: 'role/list',
//       name: 'Role',
//       component: () => import('@/views/acl/role/list'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '角色管理'
//       }
//     },
//     {
//       path: 'role/auth/:id',
//       name: 'RoleAuth',
//       component: () => import('@/views/acl/role/roleAuth'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '角色授权'
//       },
//       hidden: true
//     },
//     {
//       path: 'permission/list',
//       name: 'Permission',
//       component: () => import('@/views/acl/permission/list'),
//       // 设置在侧边栏展示的文字
//       meta: {
//         title: '菜单管理'
//       }
//     }]
//   }
// ]

// 任意路由:当路径出现错误的时候重定向至404
// export const anyRoutes = [
//   // 404 页面必须在最后
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // 鼠标滚动行为
  scrollBehavior: () => ({
    y: 0
  }),
  // 注册的路由是死的，没有权限要求，可以访问所有角色，活得路由可以根据不同用户展示不同的菜单
  routes: constantRoutes
})

// 重置路由
export function resetRouter() {
  // 生成新的路由
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

export default router
