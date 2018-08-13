console.log(`
Uso del Metodo replace
----------------------
`);

mensaje = 'El cliente pidio sushi , su sushiiii sushi';
console.log(mensaje.replace(/\b\w\w\b/g, 'pescado'));