function checkModel(){  
	var robotName = document.getElementById("robotName").value;
	var xhr = getXMLHttpRequest();
	var uri = "scripts/checkModel.php?modelName="+robotName;
	if (xhr) {
		xhr.onreadystatechange = resp;
		xhr.open("GET", uri);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(null);
	} else { 
		alert("Ошибка при создании XMLHttp запроса");
	}
	function resp(){
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				document.getElementById("checkerModelAnsw").innerHTML = xhr.responseText;
			} else { 
				alert("Проблема с запросом, статус " + xhr.status);
			}
		}
	}
}