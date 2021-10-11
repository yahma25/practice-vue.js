import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from './App.vue';
import Main from './views/MainView.vue';
import About from './views/AboutView.vue';
import Board from './views/BoardView.vue';
import Forbidden from './views/ForbiddenView.vue';
import router from './router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('renders the main route component', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/main');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Main).exists()).toBe(true);
  });

  it('renders the board component when clicking the link', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    await wrapper.find('[data-test-id="link_to_board"]').trigger('click');
    await wrapper.vm.$nextTick();
    console.log(wrapper.find('h1'));

    expect(wrapper.find('h1').text()).toBe('Board');
    expect(wrapper.findComponent(Board).exists()).toBe(true);
  });

  it('renders the about component with username', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/about?username=Cracking Vue.js');
    await wrapper.vm.$nextTick();

    expect(wrapper.find('h1.title').text()).toBe('안녕하세요, Cracking Vue.js입니다.');
  });

  it('renders forbidden component from my page without authorization', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    });

    router.push('/mypage');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Forbidden).exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('이용할 수 있는 권한이 없습니다.');
  });
});
