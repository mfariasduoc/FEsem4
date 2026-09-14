// funcion encargada de procesar los productos obtenidos mediante la fetch api
const mostrarProductos = (productos) => {
  const rowProductos = document.getElementById("contenedor-productos");
  if (!rowProductos) return;
  
  rowProductos.innerHTML = "";

  productos.forEach(producto => {
    const tarjeta = `
      <div class="col">
        <article class="card h-100 tarjeta bg-custom-card rounded-3 p-3 text-center">
          <img src="${producto.imagen.src}" alt="${producto.imagen.alt}" class="card-img-top mx-auto rounded" style="max-width: 220px; height: 180px; object-fit: cover;">
          <div class="card-body d-flex flex-column align-items-center p-2">
            <h3 class="card-title h5 fw-bold text-white mt-2">${producto.titulo}</h3>
            <p class="card-text small flex-grow-1 my-2" style="color: var(--texto-secundario);">${producto.descripcion}</p>
            <p class="card-text fw-bold mb-3" style="color: var(--texto-secundario);">Precio: <span class="text-custom-yellow">${producto.precio}</span></p>
            <a href="${producto.boton.url}" class="btn btn-custom-cyan w-100 mt-auto py-2">${producto.boton.texto}</a>
          </div>
        </article>
      </div>
    `;
    rowProductos.innerHTML += tarjeta;
  });
};

// funcion para cargar los productos desde data/juegos.json usando promesas
const cargarProductos = () => {
  const rowProductos = document.getElementById("contenedor-productos");
  if (!rowProductos) return;

  rowProductos.innerHTML = '<p class="text-white text-center w-100">Cargando productos...</p>';

  fetch("data/juegos.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la red al intentar cargar el archivo JSON de juegos");
      }
      return response.json();
    })
    .then(data => {
      // llama a la funcion encargada de mostrar las tarjetas dinamicamente
      mostrarProductos(data);
    })
    .catch(error => {
      rowProductos.innerHTML = '<p class="text-danger text-center w-100">Error al cargar los productos.</p>';
      console.error("Error al cargar los productos:", error);
    });
};
// ejecucion principal al cargar completamente el DOM de la pagina
document.addEventListener("DOMContentLoaded", function() {

  // eventos mouseover y mouseout para el menu de navegacion
  const menuInicio = document.getElementById("menu_inicio");
  const menuProductos = document.getElementById("menu_productos");
  const menuContacto = document.getElementById("menu_contacto");
  const leadInfo = document.getElementById("lead_info");
  const leadDefault = "Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.";

  if (menuInicio && leadInfo) {
    menuInicio.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Regresa al inicio para conocer nuestras novedades destacadas.";
    });
    menuInicio.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  if (menuProductos && leadInfo) {
    menuProductos.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Explora nuestro catálogo completo de videojuegos clásicos y modernos.";
    });
    menuProductos.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  if (menuContacto && leadInfo) {
    menuContacto.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Comunícate con nuestro equipo de soporte técnico para consultas.";
    });
    menuContacto.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  // manejo de evento click en boton de ofertas especiales
  const botonOfertas = document.getElementById("boton_ofertas");
  if (botonOfertas) {
    botonOfertas.addEventListener("click", (e) => {
      e.preventDefault();
      alert("¡Aprovecha nuestras ofertas exclusivas de la semana en PixelVerse Games!");
    });
  }

  // iniciar carga de productos
  cargarProductos();

});




// Función encargada de procesar los productos obtenidos mediante la Fetch API


// Función para cargar los productos desde data/juegos.json usando promesas

      // Como el JSON es un arreglo plano, pasamos 'data' directamente a la función
 