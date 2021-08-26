<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/item">Item</router-link> |
      <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

.header a {
  color: white;
}

.header .router-link-active {
  color: #35495e;
}
</style>