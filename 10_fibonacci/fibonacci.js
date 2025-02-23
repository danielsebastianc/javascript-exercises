const fibonacci = function (num) {
    let fibCount;
    if (typeof num !== "number") {
        fibCount = parseInt(num);
    } else {
        fibCount = num;
    }

    if (fibCount < 0) {
        return "OOPS";
    }
    if (fibCount == 0) {
        return 0;
    }

    let firstNum = 1;
    let secondNum = 0;

    for (let i = 2; i <= fibCount; i++) {
        let temp = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = temp;
    }
    return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
