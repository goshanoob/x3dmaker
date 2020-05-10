onload = function(){
	document.getElementById("sndStd").onclick = sendStud;
}

function sendStud(){  
	var stud = [
		document.getElementById("fio").value,
		document.getElementById("group").value,
	];
	var xhr = getXMLHttpRequest();
	var uri = "scripts/saveStudent.php";
	if (xhr) {
		xhr.onreadystatechange = resp;
		xhr.open("POST", uri);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('mas='+JSON.stringify(stud));
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