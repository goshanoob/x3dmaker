onload=function(){ 
  readCatalogue();
  document.getElementById('list').addEventListener('change', readFile, false);
  document.getElementById('next').addEventListener('click', readNext)
}

function readNext(){
  var list =  document.getElementById('list');
  list.selectedIndex = list.selectedIndex + 1;
  readFile();
}

function readCatalogue(){
  var xhr = getXMLHttpRequest();
  var uri = "scripts/catalogueReader.php";
  if (xhr) {
    xhr.onreadystatechange = createList;
    xhr.open("GET", uri);
    xhr.send(null);
  } else { 
    alert("Ошибка при создании XMLHttp запроса");
  }
  
  function createList(){
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var catalogue = JSON.parse(xhr.responseText);
        var list = document.getElementById("list");
        for (var i=0; i<catalogue.length; i++){
		  if(catalogue[i] === "." || catalogue[i] === "..") continue;
          var option = document.createElement('option'); 
		  option.innerHTML = catalogue[i];
          list.appendChild(option);
	    }
      } else { 
	    alert("Проблема с запросом, статус " + xhr.status);
	  }
    }
  }
}


function readFile(){
  //getInfo();
  var prog = document.getElementById('list').value;
  var uri = "scripts/fileReader.php?имяФайла="+encodeURIComponent(prog+"/MC.x3d")+"&r="+Math.random;
  
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
	    var code =  xhr.responseText;
	    code = code.replace(/url="body_/g,'url="Models/'+prog+'/body_');
        if (document.getElementById("data")!=undefined) { 
			document.getElementById("data").parentNode.removeChild(document.getElementById("data"));
		}			
		var div = document.createElement('div');
		document.getElementById("content").appendChild(div);			
		div.innerHTML = code;
		div.id="data";  
			
	    x3dview();
		makePlz();

      } else { 
	    alert("Проблема с запросом, статус " + xhr.status);
	  }
    }
  }

}

function writeFile(code){
  var list=document.getElementById("list");
  var file = list.options[list.selectedIndex].text;
  var uri = "scripts/fileWriter.php?r="+Math.random();
  var xhr = getXMLHttpRequest();
  if (xhr) {
    xhr.onreadystatechange = resp;
    xhr.open("POST", uri);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("разметка="+encodeURIComponent(code.childNodes[0].outerHTML)+
	  '&имяФайла='+encodeURIComponent(file));
  } else { 
    alert("Ошибка при создании XMLHttp запроса");
  }
  
  function resp(){
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
		document.getElementById('data').innerHTML += '<br/>'+xhr.responseText;
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

/* ифа о моделе и студенте */
function getInfo(){
  var prog = document.getElementById('list').value;
  var xhr = getXMLHttpRequest();
  var uri = "scripts/getInfo.php?имяФайла="+prog+"&r="+Math.random;
  if (xhr) {
    xhr.onreadystatechange = showInfo;
    xhr.open("GET", uri);
    xhr.send(null);
  } else { 
    alert("Ошибка при создании XMLHttp запроса");
  }
  
  function showInfo(){
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var info = JSON.parse(xhr.responseText);
        for(var i in info){
          document.getElementById("info").innerHTML += info[i]+'<br/>';
        }

      } else { 
	    alert("Проблема с запросом, статус " + xhr.status);
	  }
    }
  }
}