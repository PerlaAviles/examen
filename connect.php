<?php
$servername = "localhost";
$username = "id20657631_productos";
$password = "BadRomance06.";
$dbname = "id20657631_productos";


$connection = mysqli_connect($servername, $username, $password, $dbname);

//hacemos llamado al imput de formuario
$Producto = $_POST["Producto"] ;
$Precio = $_POST["Precio"] ;
$Stock = $_POST["Stock"] ;

//verificamos la conexion a base datos
if(!$connection) 
        {
            echo "No se ha podido conectar con el servidor" . mysql_error();
        }
  else
        {
            echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
        }
        //indicamos el nombre de la base datos
        $dbname = "id20657631_productos";
        //indicamos selecionar ala base datos
        $dbname = mysqli_select_db($Producto,$datab);

        if (!$dbname)
        {
        echo "No se ha podido encontrar la Tabla";
        }
        else
        {
        echo "<h3>Tabla seleccionada:</h3>" ;
        }
        //insertamos datos de registro al mysql xamp, indicando nombre de la tabla y sus atributos
        $instruccion_SQL = "INSERT INTO tabla_form (Producto, Precio, Stock)
                             VALUES ('$Producto','$Precio','$Stock')";
                           
                            
        $resultado = mysqli_query($connection,$instruccion_SQL);

        //$consulta = "SELECT * FROM tabla where id ='2'"; si queremos que nos muestre solo un registro en especifivo de ID
        $consulta = "SELECT * FROM tabla_form";
        
$result = mysqli_query($connection,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}
echo "<table>";
echo "<tr>";
echo "<th><h1>id</th></h1>";
echo "<th><h1>Producto</th></h1>";
echo "<th><h1>Precio</th></h1>";
echo "<th><h1>Stock</th></h1>";
echo "</tr>";

while ($colum = mysqli_fetch_array($result))
 {
    echo "<tr>";
    echo "<td><h2>" . $colum['id']. "</td></h2>";
    echo "<td><h2>" . $colum['Producto']. "</td></h2>";
    echo "<td><h2>" . $colum['Precio'] . "</td></h2>";
    echo "<td><h2>" . $colum['Stock'] . "</td></h2>";
    echo "</tr>";
}
echo "</table>";

mysqli_close( $connection );

   //echo "Fuera " ;
   echo'<a href="index.html"> Volver Atrás</a>';


?>