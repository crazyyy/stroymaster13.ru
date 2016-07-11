<?php

date_default_timezone_set('Europe/Moscow');
// User settings
$to = "inqvs@mail.ru";
$subject = "Сообщение с контактной формы";

if(@$_POST["hidden"])
  {
    $dt=date("d F Y, H:i:s"); // дата и время

    $fnm=$_POST["your-name"];
    $fnm=htmlspecialchars($fnm); // обрабатываем

    $email = $_POST["your-email"];

    $phone=$_POST["your-subject"];
    $message=$_POST["your-message"];

    $mess.="Имя: $fnm\n";
    $mess.="Почта: $email\n";
    $mess.="Телефон: $phone\n";
    $mess.="Сообщение: $message";

    $mess .= "\n\nIP: " . $_SERVER["REMOTE_ADDR"];
    $mess .= "\n\nUSER AGENT: " . $_SERVER["HTTP_USER_AGENT"];

    $headers = "From: $email\n";
    $headers .= "X-Mailer: PHP/SimpleModalContactForm\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "Content-Transfer-Encoding: quoted-printable\n";
    mail($to, $subject, $mess, $headers); // отправляем
  }
?>
