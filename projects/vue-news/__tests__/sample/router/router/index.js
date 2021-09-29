import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import AboutView from '../views/AboutView.vue';
import BoardView from '../views/BoardView.vue';
import EmptyView from '../views/EmptyView.vue';
import ForbiddenView from '../views/ForbiddenView.vue';

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
    }
  ]
});

export default router;
