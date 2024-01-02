<?php

require 'caminho/para/PHPMailerAutoload.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $carta = $_POST["carta"];
    $destinatario = "jedsonpeido@gmail.com";
    $assunto = "Carta de Music Finder";

    // Adicione cabeçalhos necessários, como "From", "Reply-To", etc., conforme necessário

    // Enviar o e-mail
    $enviado = mail($destinatario, $assunto, $carta);

    if ($enviado) {
        echo "Carta enviada com sucesso!";
    } else {
        echo "Falha ao enviar a carta. Por favor, tente novamente.";
    }
} else {
    // Se alguém tentar acessar este script diretamente, retorna um erro
    http_response_code(400);
    echo "Erro de solicitação inválida.";
}
?>
