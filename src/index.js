
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
    return 0;
}

exports.avg = function avg (array) {
  return 0;
}
