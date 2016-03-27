function removeLetters(words) {

  var str = words.toString();

  var arr = str.split('');

 var result = '';

//var letters =  'аеёиоуэюя';
var letters = ["а", "е", "ё", "и", "о", "у", "э", "ю", "я"]


  for (var i = 0; i < arr.length; i++) {
  	var contain = false;
  		for(var j = 0; j < letters.length; j++) {
  			if(arr[i] === letters[j]) {
  				contain = true;
  			}
  		}
  		if(contain === false) {
  			result += arr[i];
  		}
  }
  return result;
}