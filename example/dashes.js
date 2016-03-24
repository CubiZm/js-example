//Допустим мы знаем число

var number = 2212062344; // 2-212-0-6-234-4
// Преобразуем их в строку (чтобы вставлять "-" потом)
// var string = number.toString();

function dashes() {

	var string = number.toString();
	//Пихнем в массив
	var arrString = string.split("");
	// через определенную "букву" добавляем "-" в цикле
	for (i = 0; i < arrString.length; i++) {
		if (i % 2) {
			return arrString[i] + "-";
		};
		// return arrString += "-";
	}

	// return arrString;

}

dashes();