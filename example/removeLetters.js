function removeLetters(words) {

  var str = words.toString();

  var arr = words.split('');

 // var result = '';

 // var letters = 'аеёиоуэюя'
 // var letters = ["а" , "е", "ё", "и", "о", "у", "э", "ю", "я"]

  // for (var i = 0; i < arr.length; i++) {
  //   result +=  arr[i];

  //   if (arr[i] === "a") {
  //     result = result + arr.splice(1);
  //   }
  // }
  return arr;
}

removeLetters();