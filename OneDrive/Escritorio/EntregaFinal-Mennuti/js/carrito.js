
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
<b><h1 class="modal-header-title">Carrito</h1></b>
`;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h4");
    modalbutton.innerText = "✖";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalbutton);

    carrito.forEach((raqueta) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        
        <img class="imgRaquetaModal" src="${raqueta.img}">
<p>${raqueta.nombre}</p>
<b><p>$${raqueta.precio}</p></b>
<div class="modalCantidad"><span class="restar"> ➖ </span>
<p class="raquetaCantidad"> ${raqueta.cantidad}</p>
<span class="sumar"> ➕ </span></div>
<p>Total: $${raqueta.cantidad * raqueta.precio}</p>
<span class="delete-raqueta"> ✖ </span>


`;
        modalContainer.append(carritoContent);


        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if (raqueta.cantidad !== 1) {
                raqueta.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            raqueta.cantidad++;
            saveLocal();
            pintarCarrito();
        });


        let eliminar = carritoContent.querySelector(".delete-raqueta");

        eliminar.addEventListener("click", () => {
            eliminarProducto(raqueta.id);

        });

    });


    const total = carrito.reduce((acc, raqueta) => acc + raqueta.precio * raqueta.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total: $${total} `;
    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};


const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoCounter();
