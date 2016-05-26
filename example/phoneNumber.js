// http://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
  var s2 = (""+numbers).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}