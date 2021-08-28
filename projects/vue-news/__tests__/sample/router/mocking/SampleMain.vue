<template>
  <div>
    Main
    <div class="username">
      {{ $route.params.username }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>