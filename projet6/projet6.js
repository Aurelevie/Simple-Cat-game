"use strict"

let a=localStorage.getItem("a");
document.getElementById('img').src = a;
let x = 400;
let y = 300;
let quete1=0;
let invent=null;

let p1x= Math.floor(Math.random() * 3000);
let p1y= Math.floor(Math.random() * 800);

let img3x= Math.floor(Math.random() * 3990);
let img3y= Math.floor(Math.random() * 900);

let img4x= Math.floor(Math.random() * 3990);
let img4y= Math.floor(Math.random() * 900);

let img5x= Math.floor(Math.random() * 3990);
let img5y= Math.floor(Math.random() * 900);

let test;
let hidden1=0;
let hidden2=0;
let hidden3=0;

let img3 = document.getElementById("img3");
img3.style.position = "absolute";
img3.style.left = img3x + "px";
img3.style.top = img3y + "px";

let img4 = document.getElementById("img4");
img4.style.position = "absolute";
img4.style.left = img4x + "px";
img4.style.top = img4y + "px";

let img5 = document.getElementById("img5");
img5.style.position = "absolute";
img5.style.left = img5x + "px";
img5.style.top = img5y + "px";


let p1 = document.getElementById("pierre1");
p1.style.position = "absolute";
p1.style.left = p1x + "px";
p1.style.top = p1y + "px";

let img = document.getElementById("img");
img.style.position = "absolute";
img.style.left = x + "px";
img.style.top = y + "px";

let ms1 = document.getElementById("maison1");
ms1.style.position = "absolute";
ms1.style.left = 800 + "px";
ms1.style.top =  400 + "px";

document.addEventListener("keydown", function(event) {
  if (event.key === "q"||event.key === "ArrowLeft") { if(x>(p1x-110+10) && x<(p1x+170) && y>(p1y-85+10) && y<(p1y-85+110)){}
 else if(x>10){x=x-10; img.style.transform = "scaleX(1)";}}

  if (event.key === "d"||event.key === "ArrowRight") { if(x>(p1x-110) && x<(p1x+170-10) && y>(p1y-85+10) && y<(p1y-85+110)){}
 else if(x<3890){x=x+10; img.style.transform = "scaleX(-1)";}}

  if (event.key === "z"||event.key === "ArrowUp") { if(x>(p1x-110+10) && x<(p1x+170-10) && y>(p1y-85+10) && y<(p1y-85+110+10)){}
 else if(y>10){y=y-10}}

  if (event.key === "s"||event.key === "ArrowDown") { if(x>(p1x-110+10) && x<(p1x+170-10) && y>(p1y-85) && y<(p1y-85+110)){}
 else if(y<900){y=y+10}}

  if (event.key === "a") {
if(test==1 && invent==null){document.getElementById("img3").hidden=true; hidden1=1; invent='img3'}
	else if(test==2 && invent==null){document.getElementById("img4").hidden=true; hidden2=1; invent='img4'}
	else if(test==3 && invent==null){document.getElementById("img5").hidden=true; hidden3=1; invent='img5'}
	else if(invent=='img3'){f7('img3');hidden1=0; img3x=x; img3y=y}
	else if(invent=='img4'){f7('img4',);hidden2=0; img4x=x; img4y=y}
	else if(invent=='img5'){f7('img5',);hidden3=0; img5x=x; img5y=y}}
img.style.left = x + "px";
img.style.top = y + "px";
window.scrollTo(
  x - (1366 / 2 + 110/2),
  y - (599 / 2 + 85/2));
if(x>(img3x-110) && x<(img3x+100) && y>(img3y-85) && y<(img3y-85+100) && hidden1==0){f5();test=1}
	else if(x>(img4x-110) && x<(img4x+100) && y>(img4y-85) && y<(img4y-85+100) && hidden2==0){f5();test=2}
	else if(x>(img5x-110) && x<(img5x+100) && y>(img5y-85) && y<(img5y-85+100) && hidden3==0){f5();test=3}
	else {f6();test=0};
if(x>(800-110) && x<(800+100) && y>(400-85) && y<(400-85+100) && hidden1==0){f5();test=1}

});

function f1(chat){ a=chat; localStorage.setItem("a", a)
if(a=='chat1.png'){
	document.getElementById('h1').innerHTML='Selected';
	document.getElementById('h2').innerHTML=''}
else {document.getElementById('h2').innerHTML='Selected'; document.getElementById('h1').innerHTML=''};
};


function f3(name){
let left=Math.floor(Math.random() * 3990) + "px";
let element = document.getElementById(name);
element.style.position = "absolute";
element.style.left = left;
element.style.top =  Math.floor(Math.random() * 900) + "px";
};

let c1x=Math.floor(Math.random() * 3990);
let c1y=Math.floor(Math.random() * 900);

chat3.style.position = "absolute";
chat3.style.left = c1x+ "px";
chat3.style.top =  c1y+ "px";


h3.style.position = "absolute";
h3.style.left = c1x+100 + "px";
h3.style.top =  c1y+100 + "px";

function f4(){
if(invent==null && quete1==0){document.getElementById('h3').innerHTML='Can you bring me flowers?'; setTimeout(f8, 5000)}
else if((invent=='img3'||invent=='img4'||invent=='img5') && quete1==0){document.getElementById('h3').innerHTML='Thanks for this beautiful flowers!';quete1=1;invent=null; setTimeout(f8, 5000)}
else if(quete1==1){document.getElementById('h3').innerHTML='Miaw'; setTimeout(f8, 5000)}
}

function f8(){document.getElementById('h3').innerHTML=''}


function f5(){
h4.style.position = "absolute";
h4.style.left = x+30 + "px";
h4.style.top =  y-50 + "px";
document.getElementById('h4').innerHTML='press A';

}
function f6(){document.getElementById('h4').innerHTML=''}

function f7(ok){
let element = document.getElementById(ok);
element.style.position = "absolute";
element.style.left = x + "px";
element.style.top = y + "px";
document.getElementById(ok).hidden=false; invent=null;
}