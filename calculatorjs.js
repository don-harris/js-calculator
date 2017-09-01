var box = document.getElementById('display');

function calculatorScreen(x) {
  box.value+=x;
  if(x==='c'){
    box.value="";
  }
}

function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

function backspace() {
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value.substr(0, value.length - 1);
}

function power(){
  x=box.value;
  x=eval(x*x);
  box.value=x;
}
