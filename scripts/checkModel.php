<?php
	$path = iconv("UTF-8","WINDOWS-1251","../Models/".$_GET["modelName"]);
	if(file_exists($path)==true){
		echo "Модель существует. Файлы будут перезаписаны";
	} else {
		echo "Будет создана новая модель";
	}
?>