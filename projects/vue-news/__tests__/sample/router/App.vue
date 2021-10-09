<template>
  <div id="app">
    <nav class="nav_bar">
      <router-link to="/main">Main</router-link>
      <span class="seperator">|</span>
      <router-link :to="{ path: 'about', query: { username: 'Cracking Vue.js' }}">About</router-link>
      <span class="seperator">|</span>
      <router-link to="/board">Board</router-link>
      <span class="seperator">|</span>
      <router-link to="/mypage">My Page</router-link>
      <span class="seperator">|</span>
      <a href="/main" class="link" data-test-id="back_to_main">Old Version(a tag)</a>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
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