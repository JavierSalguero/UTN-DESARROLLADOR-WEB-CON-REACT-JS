
//UNIDAD 2:

// Ejercicio 1

// Tengo desarrollada la siguiente función en javascript

function suma (a,b,callback){
let c = a +b;
callback();
}

// ¿Que es el tercer parámetro recibido?

// Es una función de callback. 

// ¿En que casos es obligatorio desarrollar este tipo de funciones?

// Es útil donde hay que realizar acciónes específicas después de realizar la function.


// Función de suma que recibe dos números y un callback
function suma(a, b, callback) {
  const resultado = a + b;
  // Llamamos al callback y pasamos el resultado como argumento
  callback(resultado);
}

// Función de callback que muestra el resultado
function mostrarResultado(resultado) {
  console.log("El resultado es: " + resultado);
}

// Llamamos a la función suma y proporcionamos la función de callback
suma(5, 3, mostrarResultado);
