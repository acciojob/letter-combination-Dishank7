function letterCombinations(digitstr) {
  //Complete the function
let output = [];
function solve(index,str){
if(index >= digitstr.length){
  output.push(str);
  return;
}
let currentstr = obj[digitstr[index]];
for(let i = 0; i < currentstr.length; i++){
  solve(index + 1,str + currentstr[i]);
}
}

solve(0,"");
console.log(output);
}
letterCombinations("23")
module.exports = letterCombinations;
