<?php
include_once "cors.php";

$json = json_decode(file_get_contents("php://input"));
function prueba($json){
    return $sentencia->fetchAll();
}
$prueba =  prueba($json);

echo json_encode($prueba);
?>