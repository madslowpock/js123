
/* 1
const regex = /pink/ig;
 
let originalStr = 'Mr Pink has a pink house and a pink car';
let newStr = originalStr.replace(regex, 'green');
 
console.log(newStr);
*/

/* 2
function generatePassword() {
    var length = 20,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
}
console.log(generatePassword(20));
*/

/* 4 
let input, number, random = Math.floor(Math.random() * 101);
 
        while ((input = prompt("Guess a number from 0 to 100. ")) !== null) {
            if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
                alert("insert the number");
            else if (number > random)
                alert("Less");
            else if (number < random)
                alert("More");
            else if (number == random) {
                alert("That's it!");
                break;
            }
        }
*/

/* 3
const getFibonacci = (n) => {
  let first = 0;
  let second = 1;

  if (n < 0) {
    return null;
  }
  if (n < 2) {
    return n;
  }

  let result = 0;
  for (let index = 3; index <= n + 1; index++) {
    result = first + second;
    first = second;
    second = result;
  }

  return result;
};
*/