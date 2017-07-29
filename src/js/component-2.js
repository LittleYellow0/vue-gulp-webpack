Vue.component('todo-item', {
	props: ['title'],
	template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  '
});

new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: [
			'Do the dishes',
			'Take out the trash',
			'Mow the lawn'
		]
	},
	methods: {
		addNewTodo: function() {
			this.todos.push(this.newTodoText)
			this.newTodoText = ''
		}
	}
});