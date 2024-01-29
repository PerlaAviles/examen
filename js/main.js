//alert ("Hola mundo");

let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");

const solicitudAPI = () => {
    axios.get("https://itp-bdd-ptag.000webhostapp.com/php-geoip-api/index.php")
    .then(function (response) {
      // handle success
      console.log(response.data.ip);
      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
     
  };
  // Función para manejar el envío del formulario de registro de productos
document.getElementById('Productos').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var productName = document.getElementById('Producto').value;
    var productPrice = document.getElementById('Precio').value;
    var productStock = document.getElementById('Stock').value;

    // Agregar la fila a la tabla de productos
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${Producto}</td>
        <td>${Precio}</td>
        <td>${Stock}</td>
    `;
    document.getElementById('producto').appendChild(newRow);

    // Mostrar la tabla de productos
    document.getElementById('producto').style.display = 'block';
});

// Llama al evento LOAD CADA VEZ QUE SE REFRESCA O ACTUALIZA LA PÁGINA 
// Y llama a la funcion solicitudAPI que tiene la rutina de llamar a la API desde axios
window.addEventListener('load', solicitudAPI);

  //Llama al evento LOAD cada vez que se actualiza la pag
  //Y llama a la funcion solicitudAPI que tiene la rutina de llamar a la API desde Axios
  window.addEventListener('load', solicitudAPI);