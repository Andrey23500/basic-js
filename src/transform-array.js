const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('Error');
  }

 let arrOut=arr.slice();
if(arrOut.length==0) return arrOut;

 for(let i=0;i<arrOut.length;i++) {

  if(arrOut[i]=="--discard-next") {
    if(i!=arrOut.length-1) {
      arrOut[i]='x';
      arrOut[i+1]='x';
    }   
    else arrOut[i]='x'; 
  }
  else if(arrOut[i]=="--discard-prev") {
    if(i!=0) {
      arrOut[i]='x';
      arrOut[i-1]='x';
    } 
    else arrOut[i]='x'; 
  }
  else if(arrOut[i]=="--double-next") {
    if(i!=arrOut.length-1) {
      arrOut[i]=arrOut[i+1];
    }
    else arrOut[i]='x'; 
   }
  else if(arrOut[i]=="--double-prev") {
    if(i!=0) {
      arrOut[i]=arrOut[i-1];
    } 
    else arrOut[i]='x';  
    }
  }

  let positiveArr = arrOut.filter(function(number) {
    return number !='x';
  });
 return positiveArr;
}