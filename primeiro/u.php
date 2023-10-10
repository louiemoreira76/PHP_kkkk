<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <div id="SuaMae">
        <h1>kakakakaakaa</h1>

<?php
    //parte de entrada de dados 
    $name = $_POST["name"]; 
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $city = $_POST["city"];


    echo "name: ".$nome;
    echo "email: ".$email;
    echo "telefone: ".$telefone;
    echo "city: ".$city;
?>

<?php

    //a senha que informar o php vai  comparar senha, com a definida pelo sistema para saber o resultado que ira enviar
    $senha = $_POST["senha"];
    if($senha == "fashion@15"){
        echo "Você receberá o nosso cátalago com promoções";
    }
    else{
        echo "senha incorreta, tente novamente"
    }
?>

<?php
    //esse é com a senha e o nome de usuario 
    $usuario = $_POST["usuario"];   
    $senha = $_POST['senha']

   (keyword) if($usuario == "fashion@15" and $senha == "fashionpika"){
        echo "Você receberá o nosso  catálago com promoções";
    }
    else{
        echo "Dados incorretos, tente novamente";
    }
?>
</div>
</body>
</html>
