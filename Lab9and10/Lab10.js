function theScript() {



//Math!!

var num1 = 10.2;
var num2 = 4.5;
var num3 = 15.6;

var highestNum = Math.max(num1, num2, num3);
var roundedNum = Math.round(highestNum);
var sqNum = Math.sqrt(roundedNum);

document.write(highestNum);
document.write("<br />");
document.write(roundedNum);
document.write("<br />");
document.write(sqNum);
document.write("<br />");


//RANDOM MATH!!

var randNum = Math.random();

document.write(randNum);
document.write("<br />");

var randOnetoSix = Math.floor(Math.random() * 6) + 1;

document.write(randOnetoSix);
document.write("<br />");

var randFiftyToHundred = Math.floor(Math.random() * 51) + 50;

document.write(randFiftyToHundred);
document.write("<br />");

var randMinusTenToPlusTen = Math.floor(Math.random() * 21) - 10;

document.write(randMinusTenToPlusTen);
document.write("<br />");
document.write("<br />");


//LOOPS!!

for (i = 1; i <=10; i++){      //i++ = i+1
document.write("We have looped the loop " + i + " times");
document.write("</br>")
}

document.write("<br />");
document.write("<br />");
document.write("<br />");


//CONDITIONALS


var var1 = 5;
var var2 = 8;

if (var1 == var2) {
  console.log("Numbers are equal: TRUE");
} else {
  console.log("Numbers are equal: FALSE");
}

if (var1 > var2) {
  console.log("Var1 is bigger!");
} else if (var1 < var2){
  console.log("Var2 is bigger!");
} else {
  console.log("Numbers are same");
}


//ONLOAD AND TIMING


//document.getElementByID("testing").innerHTML == "Hello World!";
repeatScript();
}

function repeatScript(){
  document.write("<div>One Div</div>");
  setTimeout(repeatScript2, 1000);
}

function repeatScript2(){
  document.write("<div>Two Div</div>");
  setTimeout(repeatScript, 1000);
}
