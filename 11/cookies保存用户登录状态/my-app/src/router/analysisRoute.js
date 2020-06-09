export default {
  path: "/analysis",
  name: "analysis",
  meta: { title: "统计", icon: "fund" },
  component: { render: h => h("router-view") },
  children: [
    {
      path: "/analysis",
      redirect: "/analysis/user-analysis"
    },
    {
      path: "user-analysis",
      name: "user-analysis",
      meta: { title: "用户分析" },
      component: () =>
        import(
          /* webpackChunkName: 'analysis' */ "../views/Analysis/User-Analysis"
        )
    },
    {
      path: "order-analysis",
      name: "order-analysis",
      meta: { title: "订单分析" },
      component: () =>
        import(
          /* webpackChunkName: 'analysis' */ "../views/Analysis/Order-Analysis"
        )
    }
  ]
};
