const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

raquetas.forEach((raqueta) => {
    let content = document.createElement("div");
    content.className - "card";
    content.innerHTML = `
<img class="imgRaqueta card-img-top" src="${raqueta.img}">
<p class="card-text">${raqueta.nombre}</p>
<b><p class="card-text">$${raqueta.precio}</p></b>

`;
    shopContent.append(content);

    let agregar = document.createElement("button")
    agregar.innerText = "agregar";
    agregar.className = "btn btn-primary mb-3 botonColor";
    
    content.append(agregar);
   
    
agregar.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado",
        duration: 1500  ,
        style: {
          background: 'lightgreen',
          
        }
      }).showToast(); 
    
const repeat = carrito.some((repeatraqueta) => repeatraqueta.id === raqueta.id);


        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === raqueta.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: raqueta.id,
                img: raqueta.img,
                nombre: raqueta.nombre,
                precio: raqueta.precio,
                cantidad: raqueta.cantidad,
            });
            
        }
        
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
        
        
    });
    
});

const saveLocal = () => {
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    };

JSON.parse(localStorage.getItem("carrito"));

















