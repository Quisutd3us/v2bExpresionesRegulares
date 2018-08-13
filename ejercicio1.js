console.log(`

Ejercicio 1
-------------------------
`);

cadena = 'Yo soy el pan vivo que ha bajado del cielo: el que come de este pan, vivirá para siempre. Y el pan que yo daré es mi carne para la vida del mundo…  Mi carne es verdadera comida, y mi sangre es verdadera bebida. El que come mi carne y bebe mi sangre, habita en mí y yo en él” (Juan 6, 51.55-56)';

patron = /el/g;

let newcadena;
var match;
while (match = patron.exec(cadena)) {
     console.log(match);
     console.log(`He encontrado un resultado: ${match[0]} ,en la posicion ${match.index}`);
     newcadena = cadena.substring(match.index, patron.lastIndex);
     console.log(newcadena);
}