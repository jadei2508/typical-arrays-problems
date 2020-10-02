
exports.min = function min (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let length = array.length;
    let min = array[0];
    let i = 1;
    while(i < length) {
        if(min > array[i]) {
            min = array[i];
        }
        i++;
    }
    return min;
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let length = array.length;
    let max = array[0];
    let i = 1;
    while(i < length) {
        if(max < array[i]) {
            max = array[i];
        }
        i++;
    }
    return max;
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    let length = array.length;
    let sum = array[0];
    let i = 1;
    while(i < length) {
        sum += array[i];
        i++;
    }
    return sum / length;
}
