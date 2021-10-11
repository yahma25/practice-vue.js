<template>
  <div id="app">
    <nav class="nav_bar">
      <router-link to="/main">Main</router-link>
      <span class="seperator">|</span>
      <router-link :to="{ path: 'about', query: { username: 'Cracking Vue.js' }}">About</router-link>
      <span class="seperator">|</span>
      <a href="/board" class="link" data-test-id="link_to_board" v-on:click.prevent="linkToBoard">Board</a>
      <span class="seperator">|</span>
      <router-link to="/mypage">My Page</router-link>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    linkToBoard: function () {
      this.$router.push('/board');
    }
  }
}
</script>

<style scope>
  .nav_bar {
    display: flex;
    align-content: center;
    justify-content: center;
    color: black;
    padding: 8px;
  }

  .seperator {
    padding: 0 4px;
  }

  section {
    display: flex;
    justify-content: center;
  }

  a {
    font-weight: bold;
  }

  a.router-link-active {
    color: #42b883;
  }
</style>