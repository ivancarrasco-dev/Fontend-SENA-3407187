let productos = ["Laptop", "Mouse", "Teclado"];

let lista = `
<ul>
    ${productos.map(p =>`<li>${p}</li>`).join("")}
</ul>
`;
console.log(lista); 