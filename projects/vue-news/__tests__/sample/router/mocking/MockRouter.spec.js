import { shallowMount } from '@vue/test-utils';
import Main from './SampleMain.vue';

describe('NestedRoute', () => {
  it('renders a title from query string', () => {
    const title = 'Cracking Vue.js';
    const wrapper = shallowMount(Main, {
      mocks: {
        $route: {
          params: { title }
        }
      }
    });

    expect(wrapper.find('.title').text()).toBe(title);
  });
});
