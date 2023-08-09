//first function
//함수를 변수에 할당

//함수를 인수로 전달받을 수 있다.
// function greetCurry(message) {
//   //내부에 함수를 반환
//   return function greet(name) {
//     return `${name} ${message}!`;
//   };
// }

const greetCurry = (message) => (name) => `${name} ${message}!`;

const morningGreet = greetCurry("안녕! 좋은 아침이야");
const eveningGreet = greetCurry("맛있는 저녁 먹으러 가자!");

console.log(typeof morningGreet);
console.log(typeof morningGreet("야무"));
console.log(typeof morningGreet("동균"));
console.log(typeof morningGreet("치현"));
