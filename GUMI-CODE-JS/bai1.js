
// run bằng cách sử dụng terminal của visual studio code : node bai1.js
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
var index=0;
showArr();
function showArr(){
    
   
    index++;
    if(index>vegetables.length){index=1};
    console.log(vegetables[index-1]);
    setTimeout(showArr,1000);
}