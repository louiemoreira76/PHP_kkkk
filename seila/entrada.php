<?php 

    $produto = $_POST["produto"];
    $preco = $_POST["preco"];
    $desconto = $_POST["desconto"];
    $quantidade = $_POST["quantidade"];

    if($quantidade > 5){
        $total = ($quantidade * $preco) -$desconto;
        $msg = "Total com Desconto: " .$total;
    } 

    else{
        $total = $quantidade * $preco;
        $msg = "Total Sem Desconto: " .$total;
    }

    echo "Produto: ".$produto."<br/>";
    echo "Preço: ".$preco."<br/>";
    echo "Quantidade: ".$quantidade."<br/>";
    echo "Desconto: ".$desconto."<br/>";
    echo "mgs: " .$msg."<br/>";
?>