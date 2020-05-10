<?php
	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host, $user, $pswd) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$res = mysqli_query($base,"SELECT count(*) AS count FROM models");
	$row = mysqli_fetch_array($res);
	echo $row['count'];;
	mysqli_close($base);
?>