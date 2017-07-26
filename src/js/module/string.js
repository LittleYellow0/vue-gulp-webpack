/**
 * 字符串模块
 * created by LittleYellow/441980627@qq.com
 */

module.exports = (function() {

	var stringModule = {};

	/**
	 * 获取url参数
	 * 有参数返回该参数值，否则返回"";
	 */
	stringModule.getUrlString = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return decodeURI(r[2]);
		} else {
			return "";
		}
	}

	/**
	 * 判断值是否为空
	 * 有值返回ture，否则返回false
	 */
	stringModule.checkEmpty = function(str) {
		if(str != "" && str != null && str != undefined) {
			return true;
		} else if(str == 0 && typeof(str) == "number") {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 时间显示格式化
	 * oDate为时间对象如new Date()；sFormation为格式文本如"yyyy-MM-dd"或"yyyy-MM-dd HH:mm:ss 星期w"
	 */
	stringModule.formatDate = function(oDate, sFormation) {
		var obj = {
			yyyy: oDate.getFullYear(),
			yy: ("" + oDate.getFullYear()).slice(-2),
			M: oDate.getMonth() + 1,
			MM: ("0" + (oDate.getMonth() + 1)).slice(-2),
			d: oDate.getDate(),
			dd: ("0" + oDate.getDate()).slice(-2),
			H: oDate.getHours(),
			HH: ("0" + oDate.getHours()).slice(-2),
			h: oDate.getHours() % 12,
			hh: ("0" + oDate.getHours() % 12).slice(-2),
			m: oDate.getMinutes(),
			mm: ("0" + oDate.getMinutes()).slice(-2),
			s: oDate.getSeconds(),
			ss: ("0" + oDate.getSeconds()).slice(-2),
			w: ['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
		};
		return sFormation.replace(/([a-z]+)/ig, function($1) {
			return obj[$1]
		});
	}

	/**
	 * 返回未来或过去n年时的时间对象
	 * 过去时n为负数
	 */
	stringModule.futureDate = function(n) {
		var now = new Date;
		now.setFullYear(now.getFullYear() + n);
		return now;
	}

	/**
	 * 对象更新扩展
	 */
	stringModule.extendObj = function() {
		var copy = function(oldObj) { //复制对象方法  
			var newObj = new Object();
			if(typeof(oldObj) != 'object' || oldObj == null) {
				return oldObj;
			}
			for(var i in oldObj) {
				newObj[i] = copy(oldObj[i]);
			}
			return newObj;
		}

		if(arguments.length < 2) {
			return;
		}
		var temp = copy(arguments[0]); //调用复制对象方法  
		for(var n = 1; n < arguments.length; n++) {
			for(var i in arguments[n]) {
				temp[i] = arguments[n][i];
			}
		}
		return temp;
	}

	/**
	 * 数组重排
	 * object[field]值应为数字
	 * order值为1时从大到小排，为-1时从小到大排
	 * sort的比较函数return值>=1时，此时互相比较的元素交换位置，反之不会(初步判断)
	 */
	stringModule.arrSort = function(arr, field, order) {
		var compareRule = function(_field, _order) {
			return function(o, t) {
				var oVal = parseInt(o[_field]);
				var tVal = parseInt(t[_field]);
				if(oVal < tVal) {
					return _order;
				} else if(oVal > tVal) {
					return -_order;
				} else {
					return 0;
				}
			}
		}
		return arr.sort(compareRule(field, order));
	}

	/**
	 * 密文代替字符串
	 */
	stringModule.infoProtectDeal = function(options) {
		var options = stringModule.extendObj({
			targetStr: "", //目标字符串
			keepStart: 0, //需保留前几位
			keepEnd: 0, //需保留后几位
			cipherLen: 0 //显示多少个*
		}, options);

		var returnStr = "";
		
		// 返回多个相同字符
		String.prototype.repeat = function(n) {
			return new Array(n + 1).join(this);
		}
		
		if(stringModule.checkEmpty(options.targetStr)) {
			if(options.keepStart > options.targetStr.length) {
				//前面要保留的数量已超过最大长度
				returnStr = options.targetStr;
			} else {

				var remainLen = options.targetStr.length - options.keepStart; //去掉前面保留的位数之后，还有多少位

				if(options.keepEnd > remainLen) {
					//后面要保留的位数已超过还剩余的位数
					returnStr = options.targetStr;
				} else {
					var remainCipherLen = options.targetStr.length - options.keepStart - options.keepEnd; //去掉前后保留之后，还有多少个字符需要*
					if(options.cipherLen >= 0) {
						//有自定义显示多个*
						remainCipherLen = options.cipherLen;
					}

					returnStr = options.targetStr.slice(0, options.keepStart).concat("*".repeat(remainCipherLen)).concat(options.targetStr.slice(-options.keepEnd));
				}

			}
		}
		return returnStr;
	};

	// 字符串格式化
	stringModule.formatDeal = function(str, type) {
		var t = "";
		switch(type) {
			case "mobile":
				for(var n = 0; n < str.length; ++n) {
					n == 3 || n == 7 ? t += " " + str[n] : t += str[n];
				}
				break;
			case "jstcard":
				for(var n = 0; n < str.length; ++n) {
					n == 6 ? t += " " + str[n] : t += str[n];
				}
				break;
		}
		return t;
	}

	// 判断数组是否包含某元素 true-包含 false-不包含
	stringModule.isInArray = function(arr, str) {
		var t = false;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == str) {
				t = true;
				break;
			}
		}
		return t;
	};

	return stringModule;
})();