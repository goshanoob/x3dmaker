<?php
	//$path = iconv("UTF-8","WINDOWS-1251","../Models");
	//ini_set('default_charset', 'UTF-8');
	$res = scandir(iconv("UTF-8", "cp1251", "../Models"));
	//$res = glob("../Models/*");
	echo json_encode($res);
?>