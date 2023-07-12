async function cargarProductos() {
    return (await fetch("./js/productos.json")).json();
  }
  
function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
  

async function buscarProductoPorId(id) {
    const productos = await cargarProductos();
    return productos.find(item => item.id === +id);
}

function buscarProducto(){
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    botonCarrito();
    console.log("funciones")
}

function eliminarProducto(id) {
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id != id)
    guardarCarritoLS(nuevoCarrito);
    botonCarrito();
    fotoProductos();
}


function vaciarCarrito() {
    localStorage.removeItem("carrito");
    botonCarrito();
    fotoProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.length;
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

function BotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="images/cart2.svg" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    BotonCarrito.innerHTML = contenido;    
}

function botonCarrito() {
    const carrito = cargarCarritoLS();
    const contadorCarrito = document.querySelector("#carrito .badge");
    if (contadorCarrito) {
        contadorCarrito.textContent = carrito.length;
    }
}

function fotoProductos() {
    const cantidadProductos = cantidadTotalProductos();
    const imagenCarrito = document.querySelector("#imagenCarrito");

    if (imagenCarrito) {
        if (cantidadProductos > 0) {
            imagenCarrito.setAttribute("src","cart2.svg");
        } else {
            imagenCarrito.setAttribute("src", "cart2.svg");
        }
    }
}
