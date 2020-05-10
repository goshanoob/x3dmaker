<?php
	$name = $_GET["name"];

	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host, $user, $pswd) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$sql = "SELECT * FROM models WHERE robotName LIKE '%$name%' ORDER BY robotName;";
	$res = mysqli_query($base,$sql);
	while($row = mysqli_fetch_array($res)){
		echo "Название: ".$row['robotName']."<br/>";
		echo "Тип: ".$row['robotType']."<br/>";
	}

	mysqli_close($base);
?>