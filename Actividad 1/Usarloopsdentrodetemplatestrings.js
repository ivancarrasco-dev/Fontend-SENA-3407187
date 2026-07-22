let numeros = [1,2,3,4];

let resultado = `
Numeros:
${numeros.map(n => `Numero: ${n}`).join("\n")}
`;

console.log(resultado);