<template>
  <div id="app">
    <nav class="nav_bar">
      <router-link to="/main">Main</router-link>
      <span class="seperator">|</span>
      <router-link to="/board">Board</router-link>
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
    color: white;
    background-color: #42b883;
    padding: 8px;
  }

  .seperator {
    padding: 0 4px;
  }
</style>