import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import BoardView from '../views/BoardView.vue';
import EmptyView from '../views/EmptyView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: MainView
    },
    {
      path: '/board',
      component: BoardView
    },
    {
      path: '/empty',
      component: EmptyView
    }
  ]
});

export default router;
