const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(date==null)return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) != '[object Date]'){throw new Error();}

  if(date==undefined||date==null) return 'Unable to determine the time of year!';
  let seasons=['spring','summer','autumn','winter'];
  if(date.getMonth()===2||date.getMonth()===3||date.getMonth()===4) return seasons[0];
  else if(date.getMonth()===5||date.getMonth()===6||date.getMonth()===7) return seasons[1];
  else if(date.getMonth()===8||date.getMonth()===9||date.getMonth()===10) return seasons[2];
  else if(date.getMonth()===11||date.getMonth()===0||date.getMonth()===1) return seasons[3];
};
