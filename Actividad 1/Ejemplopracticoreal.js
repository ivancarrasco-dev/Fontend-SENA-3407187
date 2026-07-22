let usuario = {
nombre: "Ana",
edad: 25,
pais: "Colombia"
};

let html =`
<div class="usuario">
<h2>${usuario.nombre}</h2>
<p>Edad: ${usuario.edad}</p>
<p>País: ${usuario.pais}</p>
</div>
`;

console.log(html)