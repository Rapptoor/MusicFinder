<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $mensagem = $_POST['mensagem'];

    require_once '../lib/swift_required.php';

    $transport = Swift_SmtpTransport::newInstance('mail.esl11ui.website', 25)
        ->setUsername('david@esl11ui.website')
        ->setPassword('g4bn{Q_lw8g9');

    $mailer = Swift_Mailer::newInstance($transport);

    $message = Swift_Message::newInstance($assunto)
        ->setFrom(array('david@esl11ui.website' => 'Scaletchi'))
        ->setTo(array('a701621765@es-loule.edu.pt'))
        ->setBody("Nome: $nome\nE-mail: $email\nMensagem:\n$mensagem");

    $result = $mailer->send($message);

    if ($result) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
} else {
    echo "Método inválido.";
}
?>
