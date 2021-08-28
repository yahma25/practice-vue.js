import { shallowMount } from '@vue/test-utils';
import Main from './SampleMain.vue';

describe('NestedRoute', () => {
  it('renders a username from query string', () => {
    const username = 'mhkim';
    const wrapper = shallowMount(Main, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });

    expect(wrapper.find('.username').text()).toBe(username);
  });
});
