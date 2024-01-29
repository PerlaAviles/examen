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

  //Llama al evento LOAD cada vez que se actualiza la pag
  //Y llama a la funcion solicitudAPI que tiene la rutina de llamar a la API desde Axios
  window.addEventListener('load', solicitudAPI);