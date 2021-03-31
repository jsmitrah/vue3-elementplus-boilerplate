const constantRouterMap = [
  { path: '/', component: httpVueLoader('src/components/login.vue'), hidden: true },
  { path: '/404', component: httpVueLoader('src/components/Dashboard/index.vue'), hidden: true },
  {
    path: '/dashboard',
    component: httpVueLoader('src/components/layout.vue'),
    name: 'Dashboard',
    hidden: true,
    children: [
      {
        path: '/dashboard',
        component: httpVueLoader('src/components/Dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/example',
    component: httpVueLoader('src/components/layout.vue'),
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-bell' },
    children: [
      {
        path: '/example/table',
        name: 'Table',
        component: httpVueLoader('src/components/example/table.vue'),
        meta: { title: 'Table', icon: 'el-icon-date' },
      },
      {
        path: '/example/tree',
        name: 'Tree',
        component: httpVueLoader('src/components/example/tree.vue'),
        meta: { title: 'Tree', icon: 'el-icon-star-on' },
      },
    ],
  },
  {
    path: '/form',
    component: httpVueLoader('src/components/layout.vue'),
    name: 'Form1',
    meta: { title: 'Form', icon: 'el-icon-picture' },
    children: [
      {
        path: '/form',
        component: httpVueLoader('src/components/Form/index.vue'),
        meta: { title: 'Form', icon: 'form' },
      },
    ],
  },
  {
    path: '/nested',
    component: httpVueLoader('src/components/layout.vue'),
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'el-icon-menu',
    },
    children: [
      {
        path: '/nested/menu1',
        component: httpVueLoader('src/components/nested/menu1/index.vue'),
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: '/nested/menu1/menu1-1',
            component: httpVueLoader('src/components/nested/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' },
          },
          {
            path: '/nested/menu1/menu1-2',
            component: httpVueLoader('src/components/nested/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                component: httpVueLoader('src/components/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' },
              },
              {
                path: '/nested/menu1/menu1-2/menu1-2-2',
                component: httpVueLoader('src/components/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' },
              },
            ],
          },
          {
            path: '/nested/menu1/menu1-3',
            component: httpVueLoader('src/components/nested/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' },
          },
        ],
      },
      {
        path: '/nested/menu2',
        name: 'Menu2',
        component: httpVueLoader('src/components/nested/menu2/index.vue'),
        meta: { title: 'Menu2' },
      },
    ],
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: constantRouterMap, // short for routes: routes
});
console.log('hello123');
const app = Vue.createApp({
  data() {
    return {
      name: '',
      sidebarOpened: true,
    };
  },
});

app.use(router);
app.use(ElementPlus);

app.mount('#app');
