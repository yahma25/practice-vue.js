<template>
  <div>
    <input
      type="text" 
      placeholder="할 일을 적어주세요."
      @input="onInputChangeText"
      :value="text"
    >
    <button type="button" @click="onClickAddTask">
      추가하기
    </button>
  </div>
</template>

<script>
export default {
  props: [
    'onInputChangeText',
    'text',
    'onClickAddTask',
  ]
}
</script>