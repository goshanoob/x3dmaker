onload = function (){
	document.getElementById("robotName").oninput = checkModel;
	document.getElementById("chooser").onclick = sendFile;
	document.getElementById("sqlsender").onclick = sendToSQL;
}
