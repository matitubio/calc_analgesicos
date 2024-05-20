// .Productos

const productos = [
  {
    nombre: "Actron600",
    precio: 5350,
  },

  {
    nombre: "Actron400",
    precio: 2100,
  },

  {
    nombre: "Alikal",
    precio: 550,
  },

  {
    nombre: "Amoxicilina",
    precio: 1250,
  },

  {
    nombre: "Amoxidal",
    precio: 2100,
  },

  {
    nombre: "Anaflex",
    precio: 1690,
  },

  {
    nombre: "Almaximo",
    precio: 1120,
  },

  {
    nombre: "Aspirineta",
    precio: 650,
  },

  {
    nombre: "Bayaspirina",
    precio: 1350,
  },

  {
    nombre: "Buscapina",
    precio: 4650,
  },

  {
    nombre: "Cafiaspirina",
    precio: 1550,
  },

  {
    nombre: "CafiaspirinaPlus",
    precio: 2000,
  },

  {
    nombre: "Dexalergin",
    precio: 8100,
  },

  {
    nombre: "Diclofenac",
    precio: 950,
  },

  {
    nombre: "Dorixina",
    precio: 1300,
  },

  {
    nombre: "Ibuprofeno600",
    precio: 600,
  },

  {
    nombre: "IbuevanolRap.Acc",
    precio: 1850,
  },

  {
    nombre: "IbuevanolPlus",
    precio: 2000,
  },

  {
    nombre: "Keterolac",
    precio: 600,
  },

  {
    nombre: "Loratadina",
    precio: 900,
  },

  {
    nombre: "Mejoralito",
    precio: 1650,
  },

  {
    nombre: "Migral",
    precio: 3350,
  },

  {
    nombre: "Mylanta",
    precio: 1900,
  },

  {
    nombre: "Next",
    precio: 3270,
  },

  {
    nombre: "Novalagina",
    precio: 4700,
  },

  {
    nombre: "Omeprazol",
    precio: 600,
  },

  {
    nombre: "PastillaDeCarbon",
    precio: 500,
  },

  {
    nombre: "Ponstil",
    precio: 1200,
  },

  {
    nombre: "Quraplus",
    precio: 2600,
  },

  {
    nombre: "Refrianex",
    precio: 2900,
  },

  {
    nombre: "SertalPerla",
    precio: 3250,
    // 2290
  },

  {
    nombre: "SertalCompuesto",
    precio: 4150,
    // 3310
  },

  {
    nombre: "Sindol600",
    precio: 2350,
  },

  {
    nombre: "Tafirol1g",
    precio: 1700,
  },

  {
    nombre: "Tafirol500mg",
    precio: 1600,
  },

  {
    nombre: "TafirolPlus",
    precio: 2250,
  },

  {
    nombre: "TafirolFlex",
    precio: 2000,
  },

  {
    nombre: "TafirolMigra",
    precio: 2830,
  },

  {
    nombre: "Tafirolito",
    precio: 2650,
  },

  {
    nombre: "TeVick",
    precio: 1500,
  },

  {
    nombre: "TeRolfita",
    precio: 300,
  },

  {
    nombre: "Uvasal",
    precio: 300,
  },

  {
    nombre: "Curitas",
    precio: 500,
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
        <option>20</option>
        <option>30</option>
        <option>60</option>
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
