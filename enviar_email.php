<?php


require_once '../lib/swift_required.php';


$transport = Swift_SmtpTransport::newInstance('mail.esl11ui.website', 25)
->setUsername('david@esl11ui.website')
->setPassword('g4bn{Q_lw8g9')
;
$mailer = Swift_Mailer::newInstance($transport);
 

$message = Swift_Message::newInstance('ola')
->setFrom(array('david@esl11ui.website' => 'Scaletchi'))
->setTo(array('a701621765@es-loule.edu.pt'))
->setBody('TESTE E-MAIL PHP - A funcionar')
;

$result = $mailer->send($message);