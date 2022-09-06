const age = parseInt( prompt("몇살") );

console.log(isNaN(age));

if(isNaN(age)){
    console.log("숫자가 아닙니다.");
}else if(age < 18 || age < 0){
    console.log("너무 어려요");
}else if(age >= 18 && age <= 50){
    console.log("음주 즐겨버려");
}else if(age > 50 && age <= 80){
    console.log("운동합시다!");
}else if(age > 80) {
    console.log("원하는거 다 하시구 사세요");
}
