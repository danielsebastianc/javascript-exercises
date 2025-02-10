const sumAll = function(start, end) {
    let firstNum = start
    let secondNum = end
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }
    if(start > end){
        firstNum = end
        secondNum = start
    }
    let sum = 0
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
