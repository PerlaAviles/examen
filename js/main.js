// alert("Hola mundo");
//se manda un mensaje al usuario que esta trabajando 
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");
const solicitudAPI = () => {

    // Hacer una petición para un usuario con ID especifico
    axios.get("https://itp-bdd-ptag.000webhostapp.com/php-geoip-api/index.php")
        .then(function (response) { // se crea una funcion en el cual recibo como parametro la funcion respuesta
            // manejar respuesta exitosa
            console.log(response.data.pais);
            ip.innerHTML = response.data.ip;
            pais.innerHTML = response.data.pais;
            continente.innerHTML = response.data.continente;
            zona_horaria.innerHTML = response.data.zona_horaria;

        })
        .catch(function (error) {
            // manejar error
            console.log(error);
        })
        .finally(function () {
            // siempre sera executado
        });
};

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores del formulario
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productStock = document.getElementById('productStock').value;

    // Mostrar mensaje de éxito
    var successMessage = document.createElement('p');
    successMessage.innerHTML = 'Producto agregado correctamente';
    document.body.appendChild(successMessage);
});
