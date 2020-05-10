<?php
	$mas = json_decode($_POST["mas"]);

	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host,$user) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$sql = "INSERT INTO students (FIO, `group`) VALUES ('".
	$mas[0]."','".
	$mas[1]."')";
	if (mysqli_query($base,$sql)) {
      echo "Студент добавлен";
	} else {
      echo $sql."<br>Ошибка записи в базу: ". mysqli_error($base);
	}
	mysqli_close($base);
?>