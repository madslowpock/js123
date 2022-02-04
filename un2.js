/*1
findVowels(‘Привет’) => 2
findVowels(‘Абракадабра’) => 5
 
 
 
function findVowels(str) {
  let count = 0;
  const vowels = ['а', 'у', 'о', 'и', 'ы', 'е', 'э'];
  
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  
  return count;
  
} findVowels('привет')
*/

/*2.1
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
factorial(10)
*/
/*2.2 рекурсия
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

factorial(10)
*/
/*3
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
} fib(100)
*/
/*3 рекурсия
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
*/