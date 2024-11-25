function addNum(){
  var num1 =  Number (document.getElementById("numberone").value);
  var num2 =  Number (document.getElementById("numbertwo").value);
  var num3 = num1 + num2;
  document.write(num3);
}

function subtractNum(){
  var num1 = document.getElementById("numberone").value;
  var num2 = document.getElementById("numbertwo").value;
  var num3 = num1 - num2;
  document.write(num3);
}

function multiplyNum(){
  var num1 = document.getElementById("numberone").value;
  var num2 = document.getElementById("numbertwo").value;
  var num3 = num1 * num2;
  document.write(num3);
}

function divideNum(){
  var num1 = document.getElementById("numberone").value;
  var num2 = document.getElementById("numbertwo").value;
  var num3 = num1 / num2;
  document.write(num3);
}
