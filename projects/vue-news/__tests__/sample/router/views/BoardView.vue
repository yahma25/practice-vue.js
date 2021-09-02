<template>
  <div>
    <h1>Board</h1>
    <router-link to="/main" class="link">Main으로(router-link)</router-link>
    <a href="/main" class="link">Main으로(a tag)</a>
  </div>
</template>

<script>
export default {
  name: 'Board'
}
</script>

<style scoped>
  .link {
    display: block;
    margin: 4px 0;
  }
</style>