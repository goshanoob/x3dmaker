function sendToSQL(){  
	var robotInfo = [
		document.getElementById("robotName").value,
		document.getElementById("robotType").value,
		document.getElementById("CStype").value,
		document.getElementById("robotOrientation").value,
		document.getElementById("bodysCount").value,
		document.getElementById("robotsFloor").value,
		document.getElementById("comment").value
	];
	var xhr = getXMLHttpRequest();
	var uri = "scripts/saveToSQL.php";
	if (xhr) {
		xhr.onreadystatechange = resp;
		xhr.open("POST", uri);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('mas='+JSON.stringify(robotInfo));
	} else { 
		alert("Ошибка при создании XMLHttp запроса");
	}
	function resp(){
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				document.getElementById("SQLinfo").innerHTML = xhr.responseText;
			} else { 
				alert("Проблема с запросом, статус " + xhr.status);
			}
		}
	}
	
}