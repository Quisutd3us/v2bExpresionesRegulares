console.log(`

uso del metodo SEARCH
-------------------------
`);

cadena = 'mi correo electronico en dnarino@gmail.com';
console.log(cadena.search('correo'));
console.log(cadena.search(/\w{2,}@\w{2,}.\w{2,}/));
console.log(cadena.search(/\W/));