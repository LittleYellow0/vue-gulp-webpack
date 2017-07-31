var vmhList = new Vue({
	el: "#dataList",
	data: {
		news: [{
				nid: "10001",
				news_ti: "fndshokfhoi",
				news_body: "的好时大海寺殴打还哦好的",
				news_pic: "http://s1.dwstatic.com/group1/M00/23/66/236644e5c226527d8f3d4fee5b9c2f591274.jpg"
			},
			{
				nid: "10002",
				news_ti: "fndshokfhoi",
				news_body: "的好时大海寺殴打还哦好的",
				news_pic: "http://s1.dwstatic.com/group1/M00/23/66/236644e5c226527d8f3d4fee5b9c2f591274.jpg"
			},
			{
				nid: "10003",
				news_ti: "fndshokfhoi",
				news_body: "的好时大海寺殴打还哦好的",
				news_pic: "http://s1.dwstatic.com/group1/M00/23/66/236644e5c226527d8f3d4fee5b9c2f591274.jpg"
			},
		],
		shop: {
			aaa: "1111",
			bbb: "2222"
		},
		className: {
			active: true,
			pick: false
		},
		info: "aaaaaa",
		des: "bbbbbb",
		isShow: true
	},
	computed: {
		showValue: function() { // 有get/set方法
			return this.news[0].nid;
		}
	},
	methods: {
		readValue: function() {
			return this.news[0].nid;
		}
	},
	filters: {
		addCode: function(value) {
			return "ABC-" + value;
		}
	},
	watch: { // 可用于监听异步调用
		info: function(val) {
			this.des = val + "cccccc";
		}
	}
});

document.querySelector("#update").onclick = function() {
	vmhList.news = [{
			nid: "20001",
			news_ti: "ggggggg",
			news_body: "的好时大海寺殴打还哦好的",
			news_pic: "http://s1.dwstatic.com/group1/M00/70/57/7057459fce561bcf4a79b74797e0539f643.jpg"
		},
		{
			nid: "20002",
			news_ti: "ggggggg",
			news_body: "的好时大海寺殴打还哦好的",
			news_pic: "http://s1.dwstatic.com/group1/M00/70/57/7057459fce561bcf4a79b74797e0539f643.jpg"
		},
	]
}

document.querySelector("#changeDes").onclick = function() {
	vmhList.info = "ppppp-";
}

document.querySelector("#changeShow").onclick = function() {
	vmhList.isShow = Math.random() > 0.5;
}