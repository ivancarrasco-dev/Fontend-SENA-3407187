function etiqueta(strings, valor) {
return `${strings[0]}${valor.toUpperCase()}${strings[1]}`;
}
let nombre = "juan";

let resultado = etiqueta`Hola ${nombre} !`;

console.log(resultado);