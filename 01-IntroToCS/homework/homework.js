'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // let decimal = 0;
  // for (let i = 0; i < num.length; i++) {
  //   decimal += +num[i] * 2 ** (num.length - 1 - i);
  // }
  // return decimal

  //tambien se podía usar bucle for decreciendo

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

  // var res = "";
  // while(num !== 0) {
  //  res = res + num % 2;
  // num = Math.floor(num/2);
  // }
  // return res

  return (num).toString(2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}