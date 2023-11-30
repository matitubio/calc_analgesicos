// Productos

const productos = [
  {
    nombre: "Actron600",
    precio: 2370,
  },

  {
    nombre: "Actron400",
    precio: 1080,
  },

  {
    nombre: "Alikal",
    precio: 270,
  },

  {
    nombre: "Amoxicilina",
    precio: 740,
  },

  {
    nombre: "Amoxidal",
    precio: 830,
  },

  {
    nombre: "Almaximo",
    precio: 500,
  },

  {
    nombre: "Bayaspirina",
    precio: 550,
  },

  {
    nombre: "Buscapina",
    precio: 2670,
  },

  {
    nombre: "Cafiaspirina",
    precio: 640,
  },

  {
    nombre: "CafiaspirinaPlus",
    precio: 820,
  },

  {
    nombre: "Diclofenac",
    precio: 320,
  },

  {
    nombre: "Dorixina",
    precio: 570,
  },

  {
    nombre: "Ibuprofeno600",
    precio: 330,
  },

  {
    nombre: "IbuevanolRap.Acc",
    precio: 880,
  },

  {
    nombre: "IbuevanolPlus",
    precio: 940,
  },

  {
    nombre: "Keterolac",
    precio: 240,
  },

  {
    nombre: "Mejoralito",
    precio: 900,
  },

  {
    nombre: "Migral",
    precio: 1520,
  },

  {
    nombre: "Novalagina",
    precio: 2710,
  },

  {
    nombre: "Omeprazol",
    precio: 350,
  },

  {
    nombre: "Quraplus",
    precio: 1200,
  },

  {
    nombre: "Refrianex",
    precio: 1160,
  },

  {
    nombre: "SertalPerla",
    precio: 1550,
  },

  {
    nombre: "SertalCompuesto",
    precio: 2130,
  },

  {
    nombre: "Sindol600",
    precio: 820,
  },

  {
    nombre: "Tafirol1g",
    precio: 760,
  },

  {
    nombre: "Tafirol500mg",
    precio: 780,
  },

  {
    nombre: "TafirolPlus",
    precio: 1130,
  },

  {
    nombre: "Tafirolito",
    precio: 1600,
  },

  {
    nombre: "Uvasal",
    precio: 170,
  },

  {
    nombre: "Curitas",
    precio: 220,
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
        <option>30</option>
        <!-- Agrega más opciones según sea necesario -->
      </select>
    `;

    // Agregar el producto al contenedor
    contenedorProductos.appendChild(divProducto);
  });
};

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
