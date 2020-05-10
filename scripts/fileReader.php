<?php
	header('Content-type: text/xml');
	if(isset($_GET['имяФайла'])){
		$file = $_GET['имяФайла'];
	} else {
		echo 'Имя файла не пришло';
	}
	$code = file_get_contents(iconv('UTF-8','Windows-1251',"../Models/".$file));
	echo($code);
?>