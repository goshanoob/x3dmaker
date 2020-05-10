<?php
	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host, $user, $pswd) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$sql = "SELECT * FROM models";
	$res = mysqli_query($base,$sql);
	while($row = mysqli_fetch_array($res)){
		echo "Номер: ".$row['id']."\n";
		echo "Название: ".$row['robotName']."\n";
		echo "Тип: ".$row['robotType']."\n";
		echo "СК: ".$row['CStype']."\n";
		echo "Ориентация: ".$row['robotOrientation']."\n";
		echo "Число тел: ".$row['bodysCount']."\n";
		echo "Расположение: ".$row['robotsFloor']."\n";
		echo "Пояснение: ".$row['comment']."\n\n";
	}
	mysqli_close($base);
?>