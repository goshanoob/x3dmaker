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