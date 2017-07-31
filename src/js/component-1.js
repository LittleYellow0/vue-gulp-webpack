Vue.component("fizz-box", {
	props: ["t", "x"],
	template: "<li>{{ t }} {{ x.name }}</li>"
})

var vm = new Vue({
	el: '#box',
	data: {
		groceryList: [{
				name: "aaa",
				type: '蔬菜'
			},
			{
				name: "bbb",
				type: '奶酪'
			},
			{
				name: "bbb",
				type: '随便其他什么人吃的东西'
			}
		]
	}
});

// 局部注册
var vmCell = new Vue({
	el: '#cell',
	components: {
		'todo-item': {
			props: ['todo'],
			template: '<li>{{ todo.text }}</li>'
		}
	},
	data: {
		groceryList: [{
				id: 0,
				text: '苹果'
			},
			{
				id: 1,
				text: '樱桃'
			},
			{
				id: 2,
				text: '香蕉'
			}
		]
	}
});

// 过渡组件1
var vmWrap = new Vue({
	el: '#wrap',
	data: {
		view: 'v-a'
	},
	components: {
		'v-a': {
			template: '<div class="full-a">Component A</div>'
		},
		'v-b': {
			template: '<div class="full-b">Component B</div>'
		}
	}
})
