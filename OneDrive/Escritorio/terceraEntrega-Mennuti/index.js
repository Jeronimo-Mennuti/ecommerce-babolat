const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

raquetas.forEach((raqueta) => {
    let content = document.createElement("div");
    content.className - "card mb-3 col-lg-3";
    content.innerHTML = `
<p class="card-text">${raqueta.nombre}</p>
<b><p class="card-text">$${raqueta.precio}</p></b>

`;
    shopContent.append(content);

    let agregar = document.createElement("button")
    agregar.innerText = "agregar";
    agregar.className = "btn btn-primary mb-3 botonColor";

    content.append(agregar);

    agregar.addEventListener("click", () => {
        carrito.push({
            id: raqueta.id,
            img: raqueta.img,
            nombre: raqueta.nombre,
            precio: raqueta.precio,

        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
<h1 class="modal-header-tittle">Carrito</h1>
`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalbutton);

    carrito.forEach((raqueta) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
<p>${raqueta.nombre}</p>
<p>$${raqueta.precio}</p>
`;
        modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, raqueta) => acc + raqueta.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `total a pagar: $${total} `;
    modalContainer.append(totalCompra);
});
































