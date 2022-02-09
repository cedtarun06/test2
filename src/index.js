function check() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var p1 = document.getElementById("name-error");
    var p2 = document.getElementById("phone-error");
    $("#name-error").empty();
    $("#phone-error").empty();
    document.getElementById("name").style.border = "1px black solid";
    document.getElementById("phone").style.border = "1px black solid";
  
    if (!name) {
      p1.innerHTML = "<p class='red'>*Name is required</p>";
      document.getElementById("name").style.borderBlockColor = "red";
    } else if (!isNaN(name)) {
      p1.innerHTML = "<p class='red'>Name must be string</p>";
      document.getElementById("name").style.borderBlockColor = "red" ;
    }
    if (!phone) {
      p2.innerHTML = "<p class='red'>Phone is required</p>";
      document.getElementById("phone").style.borderBlockColor = "red";
    } else if (isNaN(phone)) {
      p2.innerHTML = "<p class='red'>phone must be number</p>";
      document.getElementById("phone").style.borderBlockColor = "red";
    } else if (phone.length != 10) {
      p2.innerHTML = "<p class='red'>*not 10 digit</p>";
      document.getElementById("phone").style.borderBlockColor = "red";
      document.getElementById("phone").style.borderBlockColor = "red";
    } 
      
    
  }