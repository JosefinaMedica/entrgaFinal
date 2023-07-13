function fotoProductos() {
  let productos = cargarCarrito();
  let contenido = `<table class="table">`;

  if (cantidadTotalProductos() > 0) {
    contenido += `<table class="table">`;
    contenido += `<tr>
        <td colspan="3">&nbsp;</td>  
        <td class="text-end"><button class="btn btn-light btn-sm ms-2" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito</button>
        </td>
        </tr>`;
        
    productos.forEach((producto) => {
    contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><b>$${producto.precio}</b></td>
            <td class="align-middle text-end"><img src="imagenes/trash3.svg" alt="Eliminar Producto" width="16" onclick="eliminarProducto(${producto.id});"></td>
            </tr>`;
    });

    contenido += `<tr>
        <td>&nbsp;</td>
        <td>Saldo Total</td>
        <td><b>$${sumaTotalProductos()}</b></td>    
        <td>&nbsp;</td>
        </tr>
        </table>`;
  } else {
    contenido += `<div class="alert alert-secondary text-center fw-light" role="alert">El carrito está vacío!</div>`;
  }

  document.getElementById("contenido").innerHTML = contenido;
};

function mostrarProductos() {
}

function agregarProducto(id) {
  console.log("carrito")
}

function eliminarProducto(id) {
  let productos = cargarCarrito();
  let index = -1;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    productos.splice(index, 1);
    guardarCarrito(productos);
    fotoProductos();
  }
}

function calcularTotal() {
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  fotoProductos();
}

fotoProductos();
BotonCarrito();