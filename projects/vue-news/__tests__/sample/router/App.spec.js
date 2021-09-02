import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './App.vue';
import Main from './views/MainView.vue';
import router from './router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders route components', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/main');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Main).exists()).toBe(true);
  });
});
