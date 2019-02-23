
function Skrivut2(){
  $.get("Texter/Women.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut3(){
  $.get("Texter/Economy.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut4(){
  $.get("Texter/Religion.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function SkrivutS(){
  $.get("Texter/art.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut5(){
  $.get("Texter/#.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut6(){
  $.get("Texter/Culture.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut7(){
  $.get("Texter/societal.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut8(){
  $.get("Texter/none.txt", function (data){
    document.getElementById("credits").innerHTML = data;
  });
};
function Skrivut9(){
  $.get("Texter/politics.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function Skrivut10(){
  $.get("Texter/Tech.txt", function (data){
    document.getElementById("content").innerHTML = data;
  });
};
function cred(){
  $.get("Texter/cred.txt", function (data){
    document.getElementById("credits").innerHTML = data;
  });
};
function clear(){
  $.get("Texter/politics.txt", function (data){
    document.getElementById("credits").innerHTML = data;
  });
};
