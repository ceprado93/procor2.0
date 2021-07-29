<?php
$host = "db5002723614.hosting-data.io";
$usuario = "dbu1689856";
$password = "#1iNNOAUDIO";
$base_de_datos = "dbs2170402";
$mysqli = new mysqli($host, $usuario, $password, $base_de_datos);
if ($mysqli->connect_errno) {
    echo "Falló la conexión a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
return $mysqli;

?>
