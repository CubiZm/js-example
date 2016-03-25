var dashes = function dashes(num) {

	var str = num.toString();
	//Пихнем в массив
	var arr = str.split('');
	
	var result = '';

	for (var i = 0; i < arr.length; i++) {
		result = result + arr[i];

		if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
			result = result + "-"
		}
	}
		return result;
}

dashes();