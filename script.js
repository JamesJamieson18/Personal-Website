$(document).ready(function(){
  $(".links").hover(function(){
    $(this).css("font-size", "large");
    }, function(){
    $(this).css("font-size", "medium");
  });
});

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myRepo = JSON.parse(this.responseText);
    for(var i = 0; i < myRepo.length; i++) {
      document.getElementById("repositories").innerHTML += myRepo[i].name + "<br>";
    }
  }
};
newRequest.open("GET", "https://api.github.com/users/JamesJamieson18/repos", true);
newRequest.send();