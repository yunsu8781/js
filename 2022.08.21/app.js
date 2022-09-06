const calculate = {
    plus : function(a, b) {
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    time : function(a, b) {
        return a * b;
    }
    
}

const plusValue = calculate.plus(5, 5);
const minusValue = calculate.minus(20, plusValue);
const timeValue = calculate.time(plusValue, minusValue);