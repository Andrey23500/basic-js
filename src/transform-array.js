const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrOut = arr.slice();
  if (arrOut.length == 0) return arrOut;

  for (let i = 0; i < arrOut.length; i++) {

    if (arrOut[i] == "--discard-next") {
      if (i != arrOut.length - 1) {
        arrOut[i] = 'x';
        arrOut[i + 1] = 'x';
      }
      else arrOut[i] = 'x';
    }
    else if (arrOut[i] == "--discard-prev") {
      if (i != 0) {
        arrOut[i] = 'x';
        arrOut[i - 1] = 'x';
      }
      else arrOut[i] = 'x';
    }
    else if (arrOut[i] == "--double-next") {
      if (i != arrOut.length - 1) {
        arrOut[i] = arrOut[i + 1];
      }
      else arrOut[i] = 'x';
    }
    else if (arrOut[i] == "--double-prev") {
      if (i != 0) {
        arrOut[i] = arrOut[i - 1];
      }
      else arrOut[i] = 'x';
    }
  }

  let positiveArr = arrOut.filter(function (number) {
    return number != 'x';
  });
  return positiveArr;
}

module.exports = {
  transform
};
