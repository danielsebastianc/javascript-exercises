const removeFromArray = function(array, ...num) {
    let result = array
    for (let i = 0; i < num.length; i++) {
        const number = num[i];
        result = result.filter(element => {
            return number !== element
        })
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
