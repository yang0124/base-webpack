export default {
  path: "/user",
  name: "user",
  component: () =>
    import(/* webpackChunkName: 'layout' */ "../layout/UserLayout"),
  children: [
    {
      path: "/user",
      redirect: "/user/login"
    },
    {
      path: "login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: 'user' */ "../views/User/Login")
    },
    {
      path: "register",
      name: "register",
      component: () =>
        import(/* webpackChunkName: 'user' */ "../views/User/Register")
    }
  ]
};
