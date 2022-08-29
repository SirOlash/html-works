// eben=3;
// sam=4;
// emma=25;
// alert(eben+sam+emma);

let screen=document.getElementById('java');
let first, second;

function five(params){
    screen.innerHTML+=params.value;
    first=Number(params.value)
}

function plus(params){
    screen,innerHTML+=params.value;
}
function six(params){
    screen,innerHTML+=params.value;
    second-Number(params.value)
}
function equal(){
    screen.innerHTML+='=';
    screen.innerHTML+=first+second;
}