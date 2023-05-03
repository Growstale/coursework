if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
   } else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
   }
   xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     displayBooks(this);
    }
   };
   xmlhttp.open("GET", "../xml/afisha.xml", true);
   xmlhttp.send();
 
   function displayBooks(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var container='';
    var x = xmlDoc.getElementsByTagName("cart");
    for (i = 0; i < x.length; i++) {
      container += 
        "<div class='maincontainer'><a href='"+
        x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
        "'><img src='" + 
        x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue +
        "'></a><div class='title'>" +
        x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
        "</div><div class='date'>" +
        x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
        "</div><div>" +
        x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
        "</div><div>" +
        x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue +
        "</div><a class='button' style='--clr:#8243D3' href='" + 
        x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
        "'><span>" +
        x[i].getElementsByTagName("but")[0].childNodes[0].nodeValue +
        "</span></a></div>";
    }
    document.getElementById("afishacontainer").innerHTML = container;
  }