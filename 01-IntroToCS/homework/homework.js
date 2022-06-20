'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // let decimal = 0;
  // for (let i = 0; i < num.length; i++) {
  //   decimal += +num[i] * 2 ** (num.length - 1 - i);
  // }
  // return decimal
  return parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
  // let number = num;
  // let binario = (num % 2).toString();
  // for (; num > 1;) {
  //   num = parseInt(num / 2);
  //   binario = (num % 2) + (binario);
  // }
  // return binario
  return (num).toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}