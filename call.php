<?php
//Сбор данных из полей формы. 
// https://api.telegram.org/bot5802453971:AAE-djkp4DEvYupiM0myt60yAZTHDvyL4YQ/getUpdates
$name = $_POST['name'];// Берём данные из input c атрибутом name="name"
$phone = $_POST['phone']; // Берём данные из input c атрибутом name="phone"
$type = $_POST['hidden']; // Берём данные из input c атрибутом name="mail"

$token = "5802453971:AAE-djkp4DEvYupiM0myt60yAZTHDvyL4YQ"; // Тут пишем токен
$chat_id = "-672122830"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "https://samarezik.of.by/"; //Указываем название сайта


$arr = array(
  'ОБРАТНЫЙ ЗВОНОК ' => $type,
  'Сайт: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>