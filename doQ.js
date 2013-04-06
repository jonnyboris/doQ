(function(window) {
	var doQ = function(data) {
		return doQ.fn.init(data);
	}
	
	function createNumArr(arr, props) {
		var qArr = [],
			len = arr.length;

		for(var i=0; i<len; i +=1){
			var val = getObjProp(arr[i], props);
			if(isNumber(val)) {
				qArr.push(val);
			} else {
				throw new TypeError();
			}
		}
		return qArr;
	}
	
	function sortArr(arr) {
		arr.sort(function(a, b) {
			return a - b;
		});

		return arr;
	}

	function sortObjArr(arr, props) {
		arr.sort(function(a, b) {
			return getObjProp(a, props) - getObjProp(b, props);
		});

		return arr;
	}
	
	function getObjProp(obj, props) {
		var len = props.length,
			result = obj;

		for(var i=0; i<len; i+=1) {
			result = result[props[i]];
		}

		return result;
	}
	
	 function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
	function closestSearch(arr, find) {
		var low = 0, high = arr.length - 1,
			i, comparison;
		while (low <= high) {
			i = Math.floor((low + high) / 2);
			if (arr[i] < find) { low = i + 1; continue; };
			if (arr[i] > find) { high = i - 1; continue; };
			return i;
		}
		return i;
	}
	
	doQ.fn = doQ.prototype = {
		v: 0.1,
		props: undefined,
		data: undefined,
		originalData: undefined,
		
		init: function(data) {
			this.data = data;
			this.originalData = data;
			return this;
		},
		
		path: function(p) {
			this.props = p.split(".");
			return this;
		},
		
		result: function() {
			return this.data;
		},
		
		greaterThan: function(val) {
			var lowest,
				qArr;
			if(this.props != undefined) {
				qArr = createNumArr(this.data, this.props);
			} else {
				qArr = this.data;
			}

			qArr = sortArr(qArr);

			lowest = closestSearch(qArr, val);

			if(qArr[lowest] < val || qArr[lowest] === val) {
				this.data = this.data.slice(qArr.lastIndexOf(qArr[lowest]) + 1);
				return this;
			} else {
				this.data = this.data.slice(qArr.indexOf(qArr[lowest]));
				return this;
			}
		},
		
		gt: function(val) {
			return this.greaterThan(val);
		},
		
		greaterThanEqualTo: function(val) {
			return this.greaterThan(val - 1);
		},
		
		gte: function(val) {
			return this.greaterThan(val - 1);
		},
		
		lessThan: function(val) {
		
			var lowest,
				qArr;
			if(this.props != undefined) {
				qArr = createNumArr(this.data, this.props);
				this.data = sortObjArr(this.data, this.props);
			} else {
				qArr = this.data;
			}

			qArr = sortArr(qArr);

			lowest = closestSearch(qArr, val);

			if(qArr[lowest] > val || qArr[lowest] === val) {
				this.data =this.data.slice(0, qArr.indexOf(qArr[lowest]));
				return this;
			} else {
				this.data = this.data.slice(0, qArr.lastIndexOf(qArr[lowest]) + 1);
				return this;
			}
		},
		
		lt: function(val) {
			return this.lessThan(val);
		}, 
		
		lessThanEqualTo: function(val) {
			return this.lessThan(val + 1);
		},
		
		lte: function(val) {
			return this.lessThan(val + 1);
		},
		
		equalTo: function(val) {
			
		}
	}	
	window.doQ = doQ;
})(window);