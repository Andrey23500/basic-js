const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(members==undefined||members==null) return false;
  var trueArray = Array.prototype.slice.call(members, 0);
  let arr=[];

  for(let i=0;i<trueArray.length;i++){
      if(typeof(trueArray[i])=="string"){
        trueArray[i]=trueArray[i].trim();
        arr.push(trueArray[i][0].toUpperCase());
      }  
  }
  arr.sort();
  let str=arr.join('');
  
  return str;
};
