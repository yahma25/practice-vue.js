<template>
  <h1 class="title">안녕하세요, {{ $route.query.username }}입니다.</h1>
</template>

<script>
export default {
  name: 'About'
}
</script>