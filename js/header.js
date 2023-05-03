var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           document.getElementById("myheader").innerHTML = this.responseText;
       }
   };
   xhttp.open("GET", "../html/header.html", true);
   xhttp.send();