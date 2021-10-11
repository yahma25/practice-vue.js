import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import AboutView from '../views/AboutView.vue';
import BoardView from '../views/BoardView.vue';
import ForbiddenView from '../views/ForbiddenView.vue';
import MyPageView from '../views/MyPageView.vue';
import { checkAuthorization, increaseVisitCount } from '../model/VisitHistory';

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
      component: BoardView,
      meta: {
        shouldCheckVisitHistory: true
      }
    },
    {
      path: '/forbidden',
      component: ForbiddenView
    },
    {
      path: '/mypage',
      component: MyPageView,
      meta: {
        authRequired: true
      }
    }
  ]
});

export function beforeEach(to, from, next) {
  increaseVisitCount();

  if (to.matched.some(info => info.meta.authRequired)) {
    next('/forbidden');
  } else {
    next();
  }
}

export function beforeResolve(to, from, next) {
  if (to.matched.some(info => info.meta.shouldCheckVisitHistory)) {
    checkAuthorization();
  }
  next();
}

router.beforeEach(beforeEach);
router.beforeResolve(beforeResolve);

export default router;
