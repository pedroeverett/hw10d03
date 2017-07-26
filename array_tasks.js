var arrayTasks = {

	concat: function (arr1, arr2) {
		// var newArray = [];
		// for ( var item of arr1) {
		// 	newArray.push(item);
		// 	//newArray.push(item2);
		// }
		// 	for ( var item of arr2) {
		// 		newArray.push(item);
		// }
		// 	return newArray;
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArray = arr.map(function(x) {
			return x * x;
		});
		return newArray;
		// other way to do it
		// var newArray = [];
		// for (var item of arr) {
		// 	newArray.push(item*item);
		// }
		// return newArray;			
	},

	sum: function (arr) {
		var sum = arr.reduce(function( a, b ) {
		      return a + b;
		    });
		return sum;
	},

	findDuplicates: function (arr) {
		var tempArr = [];
		var duplcateArr = [];
		for (item of arr) {
			if (tempArr.includes(item) && !duplcateArr.includes(item)) {
				duplcateArr.push(item);
			}
			tempArr.push(item);
		}
		return duplcateArr;
	},

	removeAndClone: function (arr, valueToRemove) {
			var newArray = arr.filter(function(element) {
				return element != valueToRemove;
			});
			return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		for(i=0; i < arr.length; i++) {
			if (arr[i] === itemToFind) {
				newArray.push(i);
			}
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var newArray = [];
		for( item in arr) {
			if (item % 2 === 0) {
				newArray.push(item*item);
			}
		}
		return this.sum(newArray);
	}

}

module.exports = arrayTasks
