

Vue.component("fizz",{
	props: ["t","x", "cardCode"],
	template: "<li>{{ t }} {{ x.name }} {{ cardCode }}</li>"
})

var vm = new Vue({
	el: '#box-1',
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
