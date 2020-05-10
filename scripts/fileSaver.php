<?php
	$path = iconv("UTF-8","WINDOWS-1251","../Models/".$_POST["modelName"]);
	if(file_exists($path)==false){
		mkdir($path);
	}
	for( $i = 0, $len=count($_FILES['file']['name']); $i < $len; $i++){
		$file = $_FILES["file"]["name"][$i];
		//$name = basename($file);
		if (move_uploaded_file($_FILES['file']['tmp_name'][$i], $path.'/'.$file)) {
			echo '<br/>Файл '.$file.' загружен.'; 
		} else {
			echo '<br/>Файл '.$file.' - ошибка загрузки.'; 
		}
	}
?>