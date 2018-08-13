console.log('conectado...')
let expresion1 = new RegExp('abc');
console.log(expresion1.test('abcdef'));
let expresion2 = /Hola mUndo/;
console.log(expresion2.test('Hola mundo en js expresiones regulares'));


// vualquier numero del 0-9
// let expresion3 = /[0123456789]/;
let expresion3 = /[0-9a-zA-Z]/;
console.log(expresion3.test('$$$'));
// cualquier numero \d
let expresion4 = /\d\d-\d\d-\d\d\d\d/;

console.log(`cualquier numero \d: ${expresion4.test('19-junio-1982')}`);

// negaciones
let expresion5 = /[^a-z]/;
console.log(` No contiene letras ?: ${expresion5.test('12345676')}`);

let expresion6 = /[^01]/;
console.log(`No Es binario ?: ${expresion6.test('001112')}`);


// repeticion de patrones
// el signo + acepta al menos una repeticion
// el signo * acepta de 0 a muchas una repeticion

let expresion7 = /\d+/;
console.log(`hay al menos un numero ?: ${expresion7.test('')}`);

let expresion8 = /\d*/;
console.log(`hay 0 mas numeros ?: ${expresion8.test('')}`);

// patrones opcionales, puede q este o no este

let expresion9 = /\d\d?-\d\d?-\d\d\d\d/;
console.log(`el formato es 09-19-1982 puede ser tambien 1-19-1982 ?: ${expresion9.test('9-2-1982')}`);

// conteo de patrones
let expresion10 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}\w{2,}$/;
console.log(`el formato es 09-19-1982AM ?: ${expresion10.test('9-2-1982 12:00pdasdas')}`);

// Evaluar si es case sensitive \i
let expresion11 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}AM|PM/i;
console.log(`el formato es 09-19-1982AM ?: ${expresion11.test('9-2-1982 12:00pm')}`);

// agrupar patrones en subexpresiones

let expresion12 = /Woo/i;
console.log(`Woo?: ${expresion12.test('Woo woo')}`);