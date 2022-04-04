'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 let cuenta =0;
 let resultado =0;
 let array = Object.keys(num.split("")).reverse();
 for(let index=0; index< array.length; index++){
   cuenta = num[index] *2**Number(array[index])
   resultado = cuenta + resultado;
 }
 return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binarios = [];
  do{
    binarios.push(num%2)
    num = Math.floor(num/2)
  }while(num!==0);
  return binarios.reverse().join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}