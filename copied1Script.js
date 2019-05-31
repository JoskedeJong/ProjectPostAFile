// function submitForm(){ 
//   var xhr= createXHR();
//   xhr.open("GET", "ajax-get.txt",true);
//   xhr.onreadystatechange=function()
//   { 
//     if(xhr.readyState == 4)
//     {
//       document.getElementById("zone").innerHTML= xhr.responseText;	
//     } 
//   }; 
//   xhr.send(null); 
// }


function submitForm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("zone").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax-get.txt", true);
    xhttp.send();
  }