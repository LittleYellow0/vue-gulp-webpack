
var vmA = new Vue({
	el: "#eventBox-1",
	data: {
		news: "多哈搜大"
	},
	methods: {
		showData: function(event) {
			this.news = "大佛家活动";
			alert(event.target.tagName);
		},
		warn: function(message, event){
			alert(message + "-" + event.target.tagName);
		}
	}
});

// vmA.showDat();

var vmB = new Vue({
	el: "#eventBox-2",
	data: {
		message: "打热天是否"
	}
});