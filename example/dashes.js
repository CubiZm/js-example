//Допустим мы знаем число

var number = 2212062344; // 2-212-0-6-234-4
// Преобразуем их в строку (чтобы вставлять "-" потом)
var string = number.toString();

function dashes() {
	var string = number.toString();
	// через определенную "букву" добавляем "-"
	var newString = string[0] + "-" + string[1] + string[2] + string[3] + "-" + string; //и т.д. В идеале будет циклом.
	return newString;

}

dashes();