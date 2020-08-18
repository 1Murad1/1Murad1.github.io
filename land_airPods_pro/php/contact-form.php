<?php

/* Задаем переменные */
$name      = htmlspecialchars($_POST["name"]);
$email      = htmlspecialchars($_POST["email"]);
$tel        = htmlspecialchars($_POST["tel"]);

/* Ваш адрес и тема сообщения */
$address = "webenvir.mail@gmail.com";
$sub = "Заявка на AirPods";

/* Формат письма */
$mes = "
<table width='100%' cellspacing='0' cellpadding='4' border='1'>
    <tr>
        <td width='20%'>Имя:</td>
        <td>$name</td>
    </tr>
    <tr>
        <td>Email:</td>
        <td>$email</td>
    </tr>
    <tr>
        <td>Телефон:</td>
        <td>$tel</td>
    </tr>
</table>
";

 $headers = "From: " . $email . "\r\n";
 $headers .= "Reply-To: ". $email . "\r\n";
 $headers .= "MIME-Version: 1.0\r\n";
 $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

/* Отправляем сообщение, используя mail() функцию */
$from  = 'info@webenvir.net';
mail($address, $sub, $mes, $headers);
?>
