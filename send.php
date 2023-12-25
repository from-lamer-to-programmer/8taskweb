<?php
if (isset($_POST['email']) && isset($_POST['message'])) {
    $to = "badaboombadaboom@mail.ru"; // Замените на вашу электронную почту
    $subject = "Новое сообщение с сайта";
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: $email";

    // Отправка письма
    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        echo "Письмо успешно отправлено!";
    } else {
        echo "Ошибка отправки письма.";
    }
}
?>