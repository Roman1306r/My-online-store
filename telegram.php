<?php
//Сбор данных из полей формы. 
// https://api.telegram.org/bot5802453971:AAE-djkp4DEvYupiM0myt60yAZTHDvyL4YQ/getUpdates
$name1 = $_POST['name1'];
$phone1 = $_POST['phone1'];
$adress = $_POST['adress'];
$message = $_POST['message']; 


//оргтехника
$kyocera1 = $_POST['TK-1170']; 
$kyocera2 = $_POST['TK-1140'];
//Саморезы
$screw1 = $_POST['screwbox'];
$amount1 = $_POST['amountbox'];
$screw2 = $_POST['screwkilo'];
$amount2 = $_POST['amountkilo'];
//Диски по дереву
$circle1 = $_POST['strong1'];
$amountcircle1 = $_POST['amountstrong'];
$circle2 = $_POST['practic1'];
$amountcircle2 = $_POST['amountpractic'];
//Остальные переменные
$product =  $_POST['product'];
$title = $_POST['hidden'];
$attention = $_POST['attention'];


$token = "5802453971:AAE-djkp4DEvYupiM0myt60yAZTHDvyL4YQ"; // Тут пишем токен
$chat_id = "-672122830"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "https://samarezik.of.by/"; //Указываем название сайта





// $arr = array(
//   'ЗАЯВКА НА ПОКУПКУ ИЛИ ВОПРОС ' => $title,
//   'Сайт: ' => $sitename,
//   'Имя: ' => $name1,
//   'Телефон: ' => $phone1,
//   'Адресс: ' => $adress,
//   'Сообщение клиента: ' => $message,

//   '-----------ТОВАРЫ-----------' => $product,

//   'KYOCERA TK-1170: ' => $kyocera1,
//   'KYOCERA TK-1140: ' => $kyocera2,

//   '   ',

//   'Покупка саморезов коробками: ' => $screw1.' кол.: '.$amount1,
//   'Покупка саморезов килограммами: ' => $screw2.' кол.: '.$amount2,

//   '   ',

//   'Диск по дереву Strong 450/50: ' => $circle1.' кол.: '.$amountcircle1,
//   'Диск по дереву Практика 165/30: ' => $circle2.' кол.: '.$amountcircle2,

//   '   ',

//   '!!!  Нужно обязательно смотреть есть ли напротив ключа слово "on"  !!!' => $attention
// );



$arr = array(
    'ЗАЯВКА НА ПОКУПКУ ИЛИ ВОПРОС ' => $title,
    'Нужно обязательно смотреть есть ли слово "on" !' => $attention,
    'Сайт: ' => $sitename,
    'Имя: ' => $name1,
    'Телефон: ' => $phone1,
    'Адресс: ' => $adress,
    'Сообщение клиента: ' => $message,

    '-----------ТОВАРЫ-----------' => $product,
);
$cartrige = array(
    'KYOCERA TK-1170: ' => $kyocera1,
    'KYOCERA TK-1140: ' => $kyocera2,
);
$screw = array(
    'Покупка саморезов коробками: ' => $screw1.' кол.: '.$amount1,
    'Покупка саморезов килограммами: ' => $screw2.' кол.: '.$amount2,
);
$disks = array(
    'Диск по дереву Strong 450/50: ' => $circle1.' кол.: '.$amountcircle1,
    'Диск по дереву Практика 165/30: ' => $circle2.' кол.: '.$amountcircle2
);
$result = $arr + $cartrige + $screw + $disks;
 







foreach($result as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>