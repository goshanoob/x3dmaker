onload=function(){ 
  document.getElementById('enter').addEventListener('click',login);
}


function login(){
  var login = document.getElementById('login').value;
  var pass = document.getElementById('pass').value;
  var uri = "scripts/authentication.php?login="+login+"&pass="+pass;
  
  var xhr = getXMLHttpRequest();
  if (xhr) {
    xhr.onreadystatechange = readFields;
    xhr.open("GET", uri);
    xhr.send(null);
  } else { 
    alert("Ошибка при создании XMLHttp запроса");
  }

 function readFields(){
    if (xhr.readyState == 4) {
      if (xhr.status == 200) { 
		if(xhr.responseText){
			document.getElementById("welcome").innerHTML = "Добро пожаловать на ссссайт!";
			
		} else {
			document.getElementById("errors").innerHTML = "Неправильная комбинация логин/пароль";
			
		}

      } else { 
	    alert("Проблема с запросом, статус " + xhr.status);
	  }
    }
  }

}

function getXMLHttpRequest(){
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    if (window.ActiveXObject) {
      try {xhr = new ActiveXObject("Microsoft.XMLHTTP");}
      catch (e) { }
    }
  }
  return xhr;
}
