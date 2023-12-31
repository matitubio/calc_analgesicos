// Productos

const productos = [
  {
    nombre: "Actron600",
    precio: 3130,
  },

  {
    nombre: "Actron400",
    precio: 1420,
  },

  {
    nombre: "Alikal",
    precio: 310,
  },

  {
    nombre: "Amoxicilina",
    precio: 970,
  },

  {
    nombre: "Amoxidal",
    precio: 1650,
  },

  {
    nombre: "Almaximo",
    precio: 700,
  },

  {
    nombre: "Bayaspirina",
    precio: 720,
  },

  {
    nombre: "Buscapina",
    precio: 3800,
  },

  {
    nombre: "Cafiaspirina",
    precio: 850,
  },

  {
    nombre: "CafiaspirinaPlus",
    precio: 1080,
  },

  {
    nombre: "Diclofenac",
    precio: 440,
  },

  {
    nombre: "Dorixina",
    precio: 710,
  },

  {
    nombre: "Ibuprofeno600",
    precio: 510,
  },

  {
    nombre: "IbuevanolRap.Acc",
    precio: 990,
  },

  {
    nombre: "IbuevanolPlus",
    precio: 1060,
  },

  {
    nombre: "Keterolac",
    precio: 380,
  },

  {
    nombre: "Loratadina",
    precio: 420,
  },

  {
    nombre: "Mejoralito",
    precio: 1260,
  },

  {
    nombre: "Migral",
    precio: 2270,
  },

  {
    nombre: "Mylanta",
    precio: 1600,
  },

  {
    nombre: "Novalagina",
    precio: 3370,
  },

  {
    nombre: "Omeprazol",
    precio: 550,
  },

  {
    nombre: "PastillaDeCarbon",
    precio: 300,
  },

  {
    nombre: "Quraplus",
    precio: 1780,
  },

  {
    nombre: "Refrianex",
    precio: 1860,
  },

  {
    nombre: "SertalPerla",
    precio: 2750,
  },

  {
    nombre: "SertalCompuesto",
    precio: 3740,
  },

  {
    nombre: "Sindol600",
    precio: 820,
  },

  {
    nombre: "Tafirol1g",
    precio: 1080,
  },

  {
    nombre: "Tafirol500mg",
    precio: 1110,
  },

  {
    nombre: "TafirolPlus",
    precio: 1600,
  },

  {
    nombre: "TafirolFlex",
    precio: 2460,
  },

  {
    nombre: "Tafirolito",
    precio: 2280,
  },

  {
    nombre: "Uvasal",
    precio: 190,
  },

  {
    nombre: "Curitas",
    precio: 230,
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
