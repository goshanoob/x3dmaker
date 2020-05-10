<?php
	$username = $_GET["login"];
	$pass = $_GET["pass"];

	$host='localhost'; // имя хоста 
	$database='113011'; // имя базы данных
	$user='113011'; // имя пользователя
	$pswd='P3cJk33A0q'; // пароль
 
	$base = mysqli_connect($host, $user) or die("Не получилось соединиться с сервером");
	mysqli_select_db($base,$database) or die("База не подключилась");
	$sql = "SELECT * FROM login WHERE username='$username' and password='$pass'";
	$result = mysqli_query($sql);
	if(mysqli_num_rows($result)==1) {
		echo true;
	} else {  
		echo false;
	}

	mysqli_close($base);
?>