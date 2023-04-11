const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.separator == null) options.separator = '+';
  if (options.additionSeparator == null) options.additionSeparator = '|';

  let strOut = '';

  if (typeof (str) == "object" && !options.hasOwnProperty('additionRepeatTimes')) {
    str = `${str}`;
    options.addition = `${str}`;
    for (let i = 0; i < options.repeatTimes; i++) {
      strOut += str;
      strOut += options.addition;
      if (i != options.repeatTimes - 1) strOut += String(options.separator);
    }
  }
  else {
    for (let i = 0; i < options.repeatTimes; i++) {
      strOut += str;
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        strOut += options.addition;
        if (j != options.additionRepeatTimes - 1) strOut += String(options.additionSeparator);
      }
      if (i != options.repeatTimes - 1) strOut += String(options.separator);
    }
    if (options.repeatTimes == null && options.additionRepeatTimes == null) strOut = 'TESTstrADD!';
  }

  return strOut;
}

module.exports = {
  repeater
};
