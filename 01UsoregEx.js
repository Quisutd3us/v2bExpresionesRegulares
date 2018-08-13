console.log('Usando el objeto REGEX');

var expresion1 = /\d{4}/.exec('david 1982');
console.log(expresion1);

// limitar cadenas de texto o caracteres \b

var expresion2 = /\bwoo\b/.exec('woo0oo woo wo wooo');
console.log(expresion2);

var expresion3 = /pollo|res|pescado/.exec('El cliente pidio res');
console.log(expresion3);

// filtrar al inico al final

var expresion4 = /^david|nariño$/i.exec('Dsdavid hernando Nariño');
console.log(expresion4);