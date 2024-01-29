// Variables para los elementos del DOM
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");
let tablaDatos = document.getElementById("tablaDatos");

// Función para enviar el formulario con Axios y agregar a la tabla
function enviarFormulario() {
  var nombreProducto = document.getElementById('productName').value;
  var precioProducto = document.getElementById('productPrice').value;
  var stockProducto = document.getElementById('productStock').value;

  var datos = {
    formulario: {
      nombre: nombreProducto,
      precio: precioProducto,
      stock: stockProducto
    },
    api: {
      ip: ip.innerHTML,
      pais: pais.innerHTML,
      continente: continente.innerHTML,
      zona_horaria: zona_horaria.innerHTML
    }
  };

  // Agregar a la tabla
  var fila = `<tr><td>${nombreProducto}</td><td>${precioProducto}</td><td>${stockProducto}</td></tr>`;
  tablaDatos.innerHTML += fila;

  // Imprimir datos en la consola
  console.log('Datos a enviar:', JSON.stringify(datos));

  // Enviar al servidor centralizado
  axios.post("https://itp-bdd.000webhostapp.com/Central.php", datos, {
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(function (response) {
      console.log(response.data);
      // Puedes realizar acciones adicionales después de enviar el formulario al servidor centralizado
    })
    .catch(function (error) {
      console.error(error);
      // Manejar errores en caso necesario
    });
}

// Función para hacer la solicitud a la API
const SolicitudAPI = () => {
  axios.get("https://itp-bdd.000webhostapp.com/php-geoip-api/index.php")
    .then(function (response) {
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      zona_horaria.innerHTML = response.data.zona_horaria;
      // No necesitas asignar valores a nombre y comida aquí, ya que estos se obtienen del formulario
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // siempre será ejecutado
    });
};

// Llama al evento LOAD cada vez que se refresca o se actualiza la página
// Y llama a la función SolicitudAPI que tiene la rutina de llamada a la API desde Axios
window.addEventListener('load', function () {
  SolicitudAPI();
  // Puedes agregar más acciones después de cargar la página si es necesario
});
