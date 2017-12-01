var oblicz = function() {


var a = document.getElementById("a_value").value;
var h = document.getElementById("h_value").value;

if(a && h) {

var triangleArea = a*h/2;
					
alert('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);

}
else {
	alert('Musisz wpisać liczby w oba pola!!')
}

}


	