// 1. Datos de la factura
const cliente = "Maria";
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 20 }
];

// 2. Usamos .map() para transformar la lista de productos en texto
const listaProductosTexto = productos
    .map(producto => `- ${producto.nombre} :$${producto.precio}`)
    .join("\n"); // Unimos las líneas con un salto de línea

// 3. Calculamos el total de la compra
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);

// 4. Armamos la factura final usando Template Strings e Interpolación (${})
const factura = `Cliente: ${cliente}

Productos:
${listaProductosTexto}  Total: $${total}`;

// 5. Mostrar en Consola
console.log(factura);

// 6. Mostrar en HTML
document.getElementById("factura").innerText = factura;