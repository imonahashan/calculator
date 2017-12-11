
var addElement = document.getElementById('add');
addElement.onclick = function () {
    var x =Number(document.getElementById('firstNumber').value) ;
    var y =Number(document.getElementById('secondNumber').value) ;
    var z = x+y;

    document.getElementById('result').value = z;
};

var subElement = document.getElementById('sub');
subElement.onclick = function (){
    var x=document.getElementById('firstNumber').value;
    var y=document.getElementById('secondNumber').value;
    var z=x-y;

    document.getElementById('result').value=z;
};

var mulElement = document.getElementById('mul');
mulElement.onclick=function(){
    var x=document.getElementById('firstNumber').value;
    var y=document.getElementById('secondNumber').value;
    var z=x*y;

    document.getElementById('result').value=z;
};

var divElement = document.getElementById('div');
divElement.onclick = function() {
    var x=document.getElementById('firstNumber').value;
    var y=document.getElementById('secondNumber').value;
    var z=x/y;

    document.getElementById('result').value=z;
};

var modElement = document.getElementById('mod');
modElement.onclick = function(){
    var x=document.getElementById('firstNumber').value;
    var y=document.getElementById('secondNumber').value;
    var z=x%y;
    document.getElementById('result').value=z;
};





function displynum(n1)
{
    calcform.txt1.value=calcform.txt1.value+n1;
}
function resetForm(){
    document.getElementById("reset").reset();
}