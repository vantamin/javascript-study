'use strict';

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [{ message: 'Foo' }, { message: 'Bar' }],
  },
});

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }],
  },
});

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10',
    },
  },
});

Vue.component('todo-item', {
  template:
    '<li>\
      {{ title }}\
      <button type="button" v-on:click="$emit(\'remove\')">Remove</button>\
    </li>',
  props: ['title'],
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      { id: 1, title: 'Do the dishes' },
      { id: 2, title: 'Take out the trash' },
      { id: 3, title: 'Mow the lawn' },
    ],
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({ id: this.nextTodoId++, title: this.newTodoText });
      this.newTodoText = '';
    },
  },
});
