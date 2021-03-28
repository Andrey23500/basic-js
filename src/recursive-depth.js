const CustomError = require("../extensions/custom-error");
let flag=0;
module.exports = class DepthCalculator {
  calculateDepth( arr ) {
  let depth=0;
  if(Array.isArray(arr)){
   
    for(let i=0;i<arr.length;i++) {
      if(arr[i] instanceof Array) {

        flag= this.calculateDepth(arr[i]);
        if(flag>depth) {
          depth=flag;
          flag=0;
        }     
      }
    }
    return depth+1;
  }
  else return 0;
  }
};