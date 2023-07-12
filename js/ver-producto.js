async function mostrarProducto() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idProducto = urlParams.get('id')
  console.log(idProducto)
  const producto = await buscarProductoPorId(idProducto)
  console.log(producto)
  let contenido = `<div class="col-md-4">
    <img src="${producto.imagen}" class="card-img-top img-thumbnail rounded mx-auto d-block rounded " alt="${producto.nombre}">
  </div>
  <div class="col-md-4 bstertiary">
    <p class="card-text"><b>${producto.categoria}</b></p>
    <h4 class="text-uppercase fw-light pb-2 mb-4 tbg-secondary border-bottom border-secondary">${producto.nombre}</h4>
    <p class="card-text"><b>$${producto.precio}</b></p>
    <p class="my-5"><button class="btn btn-secondary btn-sm" onclick="agregarProducto(${producto.id});">Comprar</button></p>
  </div>`;

  document.getElementById("contenido").innerHTML = contenido;
}
    

mostrarProducto();
botonCarrito();