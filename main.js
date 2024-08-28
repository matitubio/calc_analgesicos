const productos = [
  {
    nombre: "Actron600",
    precio: 5600,
  },

  {
    nombre: "Actron400",
    precio: 2200,
  },

  {
    nombre: "Alikal",
    precio: 600,
  },

  {
    nombre: "Amoxicilina",
    precio: 1350,
  },

  {
    nombre: "Amoxidal",
    precio: 2350,
  },

  {
    nombre: "Anaflex",
    precio: 1900,
  },

  {
    nombre: "Almaximo",
    precio: 1200,
  },

  {
    nombre: "Aspirineta",
    precio: 700,
  },

  {
    nombre: "Azitromicina",
    precio: 1500,
  },

  {
    nombre: "Bayaspirina",
    precio: 1550,
  },

  {
    nombre: "Buscapina",
    precio: 5150,
  },

  {
    nombre: "Cafiaspirina",
    precio: 1800,
  },

  {
    nombre: "CafiaspirinaPlus",
    precio: 2300,
  },

  {
    nombre: "CaramelosCAnti",
    precio: 2500,
  },

  {
    nombre: "Dexalergin",
    precio: 11500,
  },

  {
    nombre: "Diclofenac",
    precio: 950,
  },

  {
    nombre: "Dorixina",
    precio: 1400,
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
    precio: 1850,
  },

  {
    nombre: "Migral",
    precio: 3650,
  },

  {
    nombre: "Mylanta",
    precio: 2100,
  },

  {
    nombre: "Next",
    precio: 3300,
  },

  {
    nombre: "Novalagina",
    precio: 4900,
  },

  {
    nombre: "Omeprazol",
    precio: 600,
  },

  {
    nombre: "PastillaDeCarbon",
    precio: 600,
  },

  {
    nombre: "Ponstil",
    precio: 1350,
  },

  {
    nombre: "Quraplus",
    precio: 3000,
  },

  {
    nombre: "Refrianex",
    precio: 3100,
  },

  {
    nombre: "SildenafilVENT3x30",
    precio: 6500,
  },

  {
    nombre: "SertalPerla",
    precio: 3600,
    // 2290
  },

  {
    nombre: "SertalCompuesto",
    precio: 4700,
    // 3310
  },

  {
    nombre: "Sindol600",
    precio: 2350,
  },

  {
    nombre: "Tafirol1g",
    precio: 1800,
  },

  {
    nombre: "Tafirol500mg",
    precio: 1700,
  },

  {
    nombre: "TafirolPlus",
    precio: 2550,
  },

  {
    nombre: "TafirolFlex",
    precio: 2000,
  },

  {
    nombre: "TafirolMigra",
    precio: 3600,
  },

  {
    nombre: "Tafirolito",
    precio: 3100,
  },

  {
    nombre: "TeVick",
    precio: 1500,
  },

  {
    nombre: "TeVENT3",
    precio: 700,
  },

  {
    nombre: "TeRolfita",
    precio: 450,
  },

  {
    nombre: "Uvasal",
    precio: 350,
  },

  {
    nombre: "Curitas",
    precio: 500,
  },

  {
    nombre: "Enc.CANDELAx25",
    precio: 8000,
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
        <option>25</option>
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
