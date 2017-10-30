Cifrado César

Inicio:
	Crea una web que pida, por medio de un prompt(), una frase "¿Cúal es la frase a encriptar?"al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

	Consideraciones Específicas

	Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
	
	El código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher

	El usuario no debe poder ingresar un campo vacío o que contenga números

Por ejemplo:

• Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ

• Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG


Para poder resolver se usará:

-charCodeAt(); te da la letra en código ASCII

-String.fromCharCode(); te devuelve la letra desde el código ASCII

Fórmla para descifrar: (x + n) % 26
	Dónde:
		x = posición de la letra
		n = valor fijo
		% 26 = residuo de 26	 

Fórmula para cifrar: (x - 65 + n)%26 + 65
	Dónde:
		x = núm de la letra ascii
		n = valor fijo 
		% 26 = residuo de 26 
		65 = ontener posición en el código ascii




	![esta es la imagen del diagrama](Diagrama.jpg)