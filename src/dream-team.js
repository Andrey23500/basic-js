const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == undefined || members == null) return false;
  var trueArray = Array.prototype.slice.call(members, 0);
  let arr = [];

  for (let i = 0; i < trueArray.length; i++) {
    if (typeof (trueArray[i]) == "string") {
      trueArray[i] = trueArray[i].trim();
      arr.push(trueArray[i][0].toUpperCase());
    }
  }
  arr.sort();
  let str = arr.join('');

  return str;
}

module.exports = {
  createDreamTeam
};
