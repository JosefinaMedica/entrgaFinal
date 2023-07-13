async function cargarProductos() {
    return (await fetch("./js/productos.json")).json();
  }
  
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

async function buscarProductoPorId(id) {
    const productos = await cargarProductos();
    return productos.find(item => item.id === +id);
}

async function agregarProducto(id) {
    const carrito = cargarCarrito();
    const producto = await buscarProductoPorId(id);
    carrito.push(producto);
    guardarCarrito(carrito);
    mostrarBotonCarrito();
}

function eliminarProducto(id) {
    const carrito = cargarCarrito();
    const nuevoCarrito = carrito.filter(item => item.id != id)
    guardarCarrito(nuevoCarrito);
    mostrarBotonCarrito();
    fotoProductos();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarBotonCarrito();
    fotoProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarrito();
    return carrito.length;
}

function sumaTotalProductos() {
    const carrito = cargarCarrito();

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

function mostrarBotonCarrito() {
    const carrito = cargarCarrito();
    const contadorCarrito = document.querySelector("#cantidadCarrito");
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
