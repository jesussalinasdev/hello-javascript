console.log("Hello, World!");


/*
Clases 1 a 14 (sin código)
Vídeo: https://youtu.be/1glVfFxj8a4

Clase 15 - Hola mundo
Vídeo: https://youtu.be/1glVfFxj8a4?t=2390
*/


/*
Esto es
un comentario
en varias líneas
*/
// se puede escribir con comillas dobles, simples o backticks para imprimir texto, pero las comillas deben coincidir al inicio y al final
console.log("¡Hola, JavaScript!") // comillas dobles, usado obviamente para texto
console.log('¡Hola, JavaScript!') // comillas simples, también usado para texto
console.log(`¡Hola, JavaScript!`) // backticks, usado para texto y plantillas literales

/*
Comillas dobles (" ") y simples (' '):

Son IDÉNTICAS funcionalmente en JavaScript.
Se usan para texto plano.
Regla de etiqueta: Elige una y sé consistente en todo tu proyecto (normalmente se prefiere la simple ' en JS moderno para dejar las dobles para HTML).
Backticks (   ) (Lo IMPORTANTE):

Son las "supervitaminadas".
Permiten interpolación: Meter variables dentro del texto usando ${variable}.
Permiten multilínea: Puedes dar "Enter" y el salto de línea se respeta.
Ejemplo visual:

let nombre = "Juan";
// Comillas simples/dobles (aburrido, hay que concatenar con +)
console.log('Hola ' + nombre + ', bienvenido'); 
// Backticks (MAGIA ✨)
console.log(`Hola ${nombre}, bienvenido`);
Resumen: Usa ' ' por defecto, y ` ` cuando necesites meter variables dentro.
*/

console.log(typeof(5));
console.log(typeof("5"));

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2); // Módulo: Resto de la división
