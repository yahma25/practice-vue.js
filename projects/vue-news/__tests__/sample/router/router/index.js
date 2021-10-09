import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import AboutView from '../views/AboutView.vue';
import BoardView from '../views/BoardView.vue';
import EmptyView from '../views/EmptyView.vue';
import ForbiddenView from '../views/ForbiddenView.vue';
import MyPageView from '../views/MyPageView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: MainView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/board',
      component: BoardView
    },
    {
      path: '/empty',
      redirect: '/main',
      component: EmptyView
    },
    {
      path: '/forbidden',
      component: ForbiddenView
    },
    {
      path: '/mypage',
      component: MyPageView,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(info => info.meta.requiresAuth)) {
    next('/forbidden');
  } else {
    next();
  }
});

export default router;
