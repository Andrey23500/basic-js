const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message === undefined || message === null || message === '' || key === undefined || key === null || key === '') throw new Error('Incorrect arguments!');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let K = key;
    if (!message || !key) throw Error();
    K = K.toUpperCase();
    message = message.toUpperCase();

    while (message.length > K.length) {
      K += K;
    }
    K = K.substr(0, message.length);

    let str = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (a.includes(message[i])) {
        let indexMessage = a.indexOf(message[i]);
        let indexKey = a.indexOf(K[j]);
        j++;
        str += a[((indexMessage + indexKey) % 26)];
      }
      else str += message[i];
    }

    if (this.mode) return str;
    else return str.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || message === null || message === '' || key === undefined || key === null || key === '') throw new Error('Incorrect arguments!');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let K = key;
    if (!message || !key) throw Error();
    K = K.toUpperCase();
    message = message.toUpperCase();

    while (message.length > K.length) {
      K += K;
    }
    K = K.substr(0, message.length);


    let str = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (a.includes(message[i])) {
        let indexMessage = a.indexOf(message[i]);
        let indexKey = a.indexOf(K[j]);
        j++;
        let z = indexMessage - indexKey;
        while (z < 0) z = z + 26;
        str += a[z];
      }
      else str += message[i];
    }

    if (this.mode) return str;
    else return str.split("").reverse().join("");

  }
}

module.exports = {
  VigenereCipheringMachine
};
