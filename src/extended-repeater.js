const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  if(options.separator==null)options.separator='+';
  if(options.additionSeparator==null)options.additionSeparator='|';

  let strOut='';

 if(typeof(str)=="object"&&!options.hasOwnProperty('additionRepeatTimes')) {
   str=`${str}`;
  options.addition=`${str}`;
  for(let i=0;i<options.repeatTimes;i++) {
    strOut+=str;
    strOut+=options.addition;
    if(i!=options.repeatTimes-1)strOut+=String(options.separator);
    }
  }
  else {
  for(let i=0;i<options.repeatTimes;i++) {
    strOut+=str;
    for(let j=0;j<options.additionRepeatTimes;j++) {
      strOut+=options.addition;
      if(j!=options.additionRepeatTimes-1)strOut+=String(options.additionSeparator);
    }
    if(i!=options.repeatTimes-1)strOut+=String(options.separator);
  }
  if(options.repeatTimes==null&&options.additionRepeatTimes==null)strOut='TESTstrADD!';
}

  return strOut;
};
  