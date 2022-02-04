/*1 
var str1 = "code";
var str2 = "codeeded";
function hasSameCharacter(str1, str2) {
    let a = Array.prototype.every.call(str1, (char) => str2.indexOf(char) > -1, this);
    if (a) return Array.prototype.every.call(str2, (char2) => str1.indexOf(char2) > -1, this);
    else return false;
}
 
console.log(hasSameCharacter(str1, str2));

*/

/*2
var str1 = "code";
var str2 = "codeeded";
function fixCase(str) {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  return lower < upper ? str.toUpperCase() : str.toLowerCase();
} console.log(fixCase('CODe'));

*/

/* 4
function valid(event){
var pas = document.getElementById('password').value 
var cpas = document.getElementById('checkPass').value
for(i=0;i < cpas.length; i++)
{

 if(pas[i] != cpas[i] && event.keyCode != 8)
 {
   alert('not correct password');
   break;
 }
}
}

*/