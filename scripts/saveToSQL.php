<?php
	$mas = json_decode($_POST["mas"]);

	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host, $user, $pswd) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$sql = "INSERT INTO models (robotName, robotType, CStype,robotOrientation, bodysCount, robotsFloor, comment) VALUES ('".
	$mas[0]."','".
	$mas[1]."','".
	$mas[2]."','".
	$mas[3]."','".
	$mas[4]."','".
	$mas[5]."','".
	$mas[6]."')";
	if (mysqli_query($base,$sql)) {
      echo "В базу сделана запись";
	} else {
      echo $sql."<br>Ошибка записи в базу: ". mysqli_error($base);
	}
	mysqli_close($base);
?>