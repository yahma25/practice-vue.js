import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './SampleApp.vue';
import Main from './SampleMain.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders route components', async () => {
    const router = new VueRouter({
      routes: [
        {
          path: '/main',
          component: Main
        }
      ]
    });

    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/main');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Main).exists()).toBe(true);
  });
});
