const age = parseInt( prompt("몇살") );

console.log(isNaN(age));

if(isNaN(age)){
    console.log("숫자가 아닙니다.");
}else if(age <= 19){
    console.log("음주 멈춰!");
}else if(age > 19){
    console.log("음주 즐겨버려");
}
