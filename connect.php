<?php
$servername = "localhost";
$username = "id20657631_productos";
$password = "BadRomance06.";
$dbname = "id20657631_productos";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

require_once 'conexion.php'; // Asegúrate de que la conexión esté en la misma carpeta que este archivo

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $productName = $_POST['productName'];
    $productPrice = $_POST['productPrice'];
    $productStock = $_POST['productStock'];

    // Insertar datos en la base de datos
    $sql = "INSERT INTO nombre_de_tu_tabla (productName, productPrice, productStock) VALUES ('$productName', $productPrice, $productStock)";

    if ($conn->query($sql) === TRUE) {
        echo "Producto agregado correctamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

?>