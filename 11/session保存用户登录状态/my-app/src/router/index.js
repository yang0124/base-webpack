import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404";
import userRoute from "./userRoute";
import analysisRoute from "./analysisRoute";
import managementRoute from "./managementRoute";
import { checkLogin } from "../ajax/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: () =>
      import(/* webpackChunkName: 'layout' */ "../layout/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: "/analysis/user-analysis"
      },
      analysisRoute,
      managementRoute
    ]
  },
  userRoute,
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  //登录或注册路径，不需要进行身份验证
  if (to.path.startsWith("/user")) {
    next();
  }
  //登录了
  else if (await checkLogin()) {
    next();
  }
  //没有登录
  else {
    next("/user/login");
  }
});

export default router;
