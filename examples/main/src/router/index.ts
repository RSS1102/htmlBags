import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
  },
  {
    path: "/vue",
    name: "Vue",
    component: () => import("/@/layout/index.vue"),
    children: [
      {
        path: "imageLazyLoading",
        name: "imageLazyLoading",
        component: () => import("/@/pages/imageLazyLoading/index.vue"),
      },
    ],
  },
  // {
  //   path: "/react",
  //   name: "React",
  //   children: [
  //     {
  //       path: "/",
  //       name: "React",
  //       component: () => import("@/react/index.vue"),
  //     },
  //   ],
  // },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})