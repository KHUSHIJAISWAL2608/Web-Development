mainpara = document.getElementById("para");
red = document.getElementById("red");
green = document.getElementById("green");
blue = document.getElementById("blue");
fs10 = document.getElementById("font10");
fs20 = document.getElementById("font20");
fs30 = document.getElementById("font30");
style1 = document.getElementById("poppins");
style2 = document.getElementById("times");
style3 = document.getElementById("roboto");
red.addEventListener('click',redClicked ,false);
green.addEventListener('click',greenClicked ,false);
blue.addEventListener('click',blueClicked ,false);
fs10.addEventListener('click',fontSize10 ,false);
fs20.addEventListener('click',fontSize20 ,false);
fs30.addEventListener('click',fontSize30 ,false);
style1.addEventListener('click',stylePoppins ,false);
style2.addEventListener('click',styleTimes ,false);
style3.addEventListener('click',styleRoboto ,false);
function redClicked(){
mainpara.style.color= "#ff0000";
}
function greenClicked(){
mainpara.style.color= "#00ff00";
}
function blueClicked(){
mainpara.style.color = "#0000ff";
}
function fontSize10(){
mainpara.style.fontSize = "10px";
Page | 26
}
function fontSize20(){
mainpara.style.fontSize = "20px";
}
function fontSize30(){
mainpara.style.fontSize = "30px";
}
function stylePoppins(){
mainpara.style.fontFamily = "Poppins";
}
function styleTimes(){
mainpara.style.fontFamily = "times";
}
function styleRoboto(){
mainpara.style.fontFamily = "roboto";
}