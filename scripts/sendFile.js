function sendFile(){
	var files = document.getElementById("loader").files, mainFile = false;
	var form_data = new FormData();
	for(var i=0, len = files.length; i<len; i++){
		if(files[i].name==="MC.x3d"){
			mainFile = true;
		}
		form_data.append('file[]', files[i]);
	}
	form_data.append('modelName', document.getElementById("robotName").value);
	if(!mainFile){
		alert("Нет файла MC.x3d");
		return;
	}
	var xhr = getXMLHttpRequest();
	var uri = "scripts/fileSaver.php";
	if(xhr){
		xhr.onreadystatechange = resp;
		xhr.open("POST", uri);
		xhr.send(form_data);
	} else { 
		alert("Ошибка при создании XMLHttp запроса");
	}
	
	function resp(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				document.getElementById("info").innerHTML = xhr.responseText;
			} else { 
				alert("Проблема с запросом, статус " + xhr.status);
			}
		}
	}
}

