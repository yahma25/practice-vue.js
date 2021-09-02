import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './App.vue';
import Main from './views/MainView.vue';
import About from './views/AboutView.vue';
import Board from './views/BoardView.vue';
import router from './router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders main route component', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/main');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Main).exists()).toBe(true);
  });

  it('renders board component', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/board');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Board).exists()).toBe(true);
  });

  it('renders about component with username', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/about?username=Cracking Vue.js');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('h1.title').text()).toBe('안녕하세요, Cracking Vue.js입니다.');
  });
});
