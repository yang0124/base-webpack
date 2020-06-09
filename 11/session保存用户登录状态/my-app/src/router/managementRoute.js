export default {
  path: "/management",
  name: "management",
  meta: { title: "管理", icon: "folder-open" },
  component: { render: h => h("router-view") },
  children: [
    {
      path: "/management",
      redirect: "/management/user-management"
    },
    {
      path: "user-management",
      name: "user-management",
      meta: { title: "用户管理" },
      hideInMenu: false,
      component: () =>
        import(
          /* webpackChunkName: 'management' */ "../views/Management/User-Management"
        )
    },
    {
      path: "goods-management",
      name: "goods-management",
      meta: { title: "商品管理" },
      component: () =>
        import(
          /* webpackChunkName: 'management' */ "../views/Management/Goods-Management"
        )
    },
    {
      path: "order-management",
      name: "order-management",
      meta: { title: "订单管理" },
      component: () =>
        import(
          /* webpackChunkName: 'management' */ "../views/Management/Order-Management"
        )
    }
  ]
};
