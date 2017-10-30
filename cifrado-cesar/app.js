/*1. Cifrado César*/
var sentence = prompt("¿Cúal es la frase a encriptar?");

//Encriptar "sentence"

// si el texto es diferente de 0, o si ingresa algun valor númerico 
//lo reemplaza por vacio y vuelve a llamar al prompt
if(sentence !== 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, " "){ 
  
	var sentence = prompt("Error, la frase no puede tener números o espacios. Ingresa Frase");
	}
	
	cipher(sentence);

function cipher (sentence){
	document.write("Mensaje encriptado es: " + sentence);
}
//Mostrando resultado
