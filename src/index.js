
exports.min = function min (array) {
    let length = array.length;
    if(length === 0) {
        return 0;
    }
    let min = array[0];
    let i = 1;
    while(i < length - 1) {
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
