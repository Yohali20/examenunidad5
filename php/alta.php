<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  /*Aqui se mandan a llamar los datos optenidos obtenidos en el input y 
  se colocan en  file_get_contents() que devuelve el fichero a un string 
  y una vez obtenidos los manda an MYSQL para que se guarde en la bd*/
  $json = file_get_contents('php://input');
 
  /* el json_decod convierte un string codificado en JSON a una variable de PHP. 
  y sólo trabaja con string codificados en UTF-8.*/
  $params = json_decode($json);
  
  /* Conexion a la bd y se retorna a la conexion */
  require("conexion.php");
  $con=retornarConexion();
  
/* Se manda los datos a la bd */
  mysqli_query($con,"insert into articulos(descripcion,precio) values
                  ('$params->descripcion',$params->precio)");
    
  
  class Result {}
  /* Si los datos fueron agregados correctamenet se mandaraeste mensaje */
  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  /* Se vuelve a convertir el dato el json */
  echo json_encode($response);  
?>