<template>
  <div>
    <h1>Todo-App</h1>
    <todo-panel 
      :onInputChangeText="handleInputChangeText"
      :text="text"
      :onClickAddTask="handleClickAddTask"
    />
    <todo-list 
      :tasks="tasks"
      :onClickToggleDone="handleClickToggleDone"
      :onClickDeleteTask="handleClickDeleteTask"
    />
  </div>
</template>

<script>
import TodoPanel from './TodoPanel.vue';
import TodoList from './TodoList.vue';

export default {
  components: {
    TodoPanel,
    TodoList,
  },
  data() {
    return {
      newId: 0,
      text: '',
      tasks: [],
    }
  },
  methods: {
    handleClickAddTask(){
      this.tasks = [
        ...this.tasks,
        {
          id: this.newId,
          text: this.text,
          done: false,
        }
      ]

      this.newId++;
      this.text = '';
    },
    handleInputChangeText({ target: { value } }) {
      this.text = value;
    },
    handleClickToggleDone(id) {
      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task);
    },
    handleClickDeleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }
  },
}
</script>