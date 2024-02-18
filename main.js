// .Productos

const productos = [
  {
    nombre: "Actron600",
    precio: 4450,
  },

  {
    nombre: "Actron400",
    precio: 1920,
  },

  {
    nombre: "Alikal",
    precio: 420,
  },

  {
    nombre: "Amoxicilina",
    precio: 1250,
  },

  {
    nombre: "Amoxidal",
    precio: 1810,
  },

  {
    nombre: "Anaflex",
    precio: 1520,
  },

  {
    nombre: "Almaximo",
    precio: 770,
  },

  {
    nombre: "Aspirineta",
    precio: 500,
  },

  {
    nombre: "Bayaspirina",
    precio: 1040,
  },

  {
    nombre: "Buscapina",
    precio: 4190,
  },

  {
    nombre: "Cafiaspirina",
    precio: 1220,
  },

  {
    nombre: "CafiaspirinaPlus",
    precio: 1590,
  },

  {
    nombre: "Dexalergin",
    precio: 7000,
  },

  {
    nombre: "Diclofenac",
    precio: 740,
  },

  {
    nombre: "Dorixina",
    precio: 920,
  },

  {
    nombre: "Ibuprofeno600",
    precio: 540,
  },

  {
    nombre: "IbuevanolRap.Acc",
    precio: 1400,
  },

  {
    nombre: "IbuevanolPlus",
    precio: 1500,
  },

  {
    nombre: "Keterolac",
    precio: 580,
  },

  {
    nombre: "Loratadina",
    precio: 540,
  },

  {
    nombre: "Mejoralito",
    precio: 1510,
  },

  {
    nombre: "Migral",
    precio: 2410,
  },

  {
    nombre: "Mylanta",
    precio: 1600,
  },

  {
    nombre: "Next",
    precio: 3270,
  },

  {
    nombre: "Novalagina",
    precio: 4380,
  },

  {
    nombre: "Omeprazol",
    precio: 580,
  },

  {
    nombre: "PastillaDeCarbon",
    precio: 380,
  },

  {
    nombre: "Ponstil",
    precio: 1100,
  },

  {
    nombre: "Quraplus",
    precio: 1950,
  },

  {
    nombre: "Refrianex",
    precio: 2080,
  },

  {
    nombre: "SertalPerla",
    precio: 2750,
    // 2290
  },

  {
    nombre: "SertalCompuesto",
    precio: 3740,
    // 3310
  },

  {
    nombre: "Sindol600",
    precio: 1010,
  },

  {
    nombre: "Tafirol1g",
    precio: 1280,
  },

  {
    nombre: "Tafirol500mg",
    precio: 1420,
  },

  {
    nombre: "TafirolPlus",
    precio: 1830,
  },

  {
    nombre: "TafirolFlex",
    precio: 1980,
  },

  {
    nombre: "TafirolMigra",
    precio: 2800,
  },

  {
    nombre: "Tafirolito",
    precio: 2500,
  },

  {
    nombre: "Te vick",
    precio: 1250,
  },

  {
    nombre: "Uvasal",
    precio: 250,
  },

  {
    nombre: "Curitas",
    precio: 320,
  },
];

// Función para cargar los productos en el contenedor
const cargarProductos = () => {
  const contenedorProductos = document.getElementById("productos-container");

  // Iterar sobre el array de productos y crear la estructura HTML
  productos.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    // Variables para que cargar precio de lista y que calcule la ganancia
    // const Ganancia = (producto.precio * 30) / 100;
    // const precioFinal = producto.precio + Ganancia;

    const precioSugerido = producto.precio + producto.precio * (40 / 100);
    const precioRedondeado = Math.round(precioSugerido / 10) * 10;

    divProducto.innerHTML = `
      <h4>${producto.nombre}</h4>
      <p>$${producto.precio}</p>
      <label for="${producto.nombre}">Cantidad:</label>
      <select name="${producto.nombre}" id="${producto.nombre}">
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>30</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>
     <p class="sugerido">(Sug.$${precioRedondeado}) </p>
    `;

    // Agregar el producto al contenedor
    contenedorProductos.appendChild(divProducto);
  });
};

// formulita +40% sugerido   producto.precio + producto.precio * (40 / 100)

cargarProductos();

document.getElementById("boton-comprar").addEventListener("click", function () {
  // Obtener el nombre del cliente
  const nombreCliente = document.getElementById("nombre").value;

  // Obtener la cantidad de cada producto seleccionado
  const cantidades = {};
  productos.forEach((producto) => {
    const cantidad = document.getElementById(producto.nombre).value;
    if (cantidad > 0) {
      cantidades[producto.nombre] = cantidad;
    }
  });

  // Convertir la información a cadena de consulta
  const queryString = `?nombre=${encodeURIComponent(
    nombreCliente
  )}&${Object.entries(cantidades)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&")}`;

  // Redirigir a factura.html con la información
  window.location.href = `factura.html${queryString}`;
});
