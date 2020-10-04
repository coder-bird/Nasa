function myMove1() {
    var elem = document.getElementById("myAnimation");
    elem.style.backgroundSize = '400px';
    elem.style.backgroundImage = 'url("https://www.uokpl.rs/fpng/f/430-4305418_international-space-station.png")';
  var pos = 350;
  var id = setInterval(frame, 10);
  function frame() {
    document.getElementById("myContainer").style.backgroundImage = "";
    if (pos == 150) {
      clearInterval(id);
      elem.style.backgroundImage = "";
        document.getElementById("myContainer").style.backgroundImage = 'url("iss.png")';
        document.getElementById("myContainer").style.backgroundSize = '600px';
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*function disp1(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("coast.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text1").style.visibility = "visible";
  console.log("hi");
}
function disp2(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("climate.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text2").style.visibility = "visible";
  console.log("hi");
}
function disp3(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("flood.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text3").style.visibility = "visible";
  console.log("hi");
}
function disp4(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("venice.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text4").style.visibility = "visible";
  console.log("hi");
}
function disp5(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("dakota.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text5").style.visibility = "visible";
  console.log("hi");
}
function disp6(){
  document.getElementById("text7").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("dakota.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text6").style.visibility = "visible";
  console.log("hi");
}
function disp7(){
  document.getElementById("text6").style.visibility = "hidden";
  document.getElementById("text5").style.visibility = "hidden";
  document.getElementById("text4").style.visibility = "hidden";
  document.getElementById("text3").style.visibility = "hidden";
  document.getElementById("text2").style.visibility = "hidden";
  document.getElementById("text1").style.visibility = "hidden";
  document.getElementById("sci-image").style.backgroundImage = 'url("sea.jpg")';
  document.getElementById("sci-image").style.backgroundSize = '500px';
  document.getElementById("text7").style.visibility = "visible";
  console.log("hi");
}*/