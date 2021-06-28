<?php
function retornarConexion() {
  /*                  servidor,usuario, pasword,bd */
  $con=mysqli_connect("localhost","root","","bd1");
  return $con;
}
?>