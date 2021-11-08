<template>
  <ul>
    <li v-for="{ id, text, done } in tasks" :key="id">
      <span 
        :class="done ? 'done' : ''"
        @click="onClickToggleDone(id)"
      >
        {{ text }}
      </span>
      <button type="button" @click="onClickDeleteTask(id)">삭제하기</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'tasks',
    'onClickToggleDone',
    'onClickDeleteTask'
  ]
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>