onload = function (){ 
	document.getElementById("clear").onclick = function(){
		document.getElementById("output").value = "";
	}
	document.getElementById("findModel").oninput = findAtSQL;
	;(function (){ 
		var findName = document.getElementById("findModel").value;

		var xhr = getXMLHttpRequest();
		var uri = "scripts/makeCount.php";
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
					document.getElementById("countModel").innerHTML = xhr.responseText;
				} else { 
					alert("Проблема с запросом, статус " + xhr.status);
				}
			}
		}
	
	}());
	getAllSQL();
}
function findAtSQL(){ 
	var findName = this.value;

	var xhr = getXMLHttpRequest();
	var uri = "scripts/findModel.php?name="+findName;
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
				document.getElementById("data").innerHTML = "Результаты поиска: <br/>"+xhr.responseText;
			} else { 
				alert("Проблема с запросом, статус " + xhr.status);
			}
		}
	}
	
}

function getAllSQL(){ 
	var xhr = getXMLHttpRequest();
	var uri = "scripts/giveAllSQL.php";
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
				document.getElementById("output").value += "\n --------- \n"+xhr.responseText;
			} else { 
				alert("Проблема с запросом, статус " + xhr.status);
			}
		}
	}
	
}