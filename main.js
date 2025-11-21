// ===============Q1==============
// let str = "123";
// let num = parseFloat(str);

// console.log(num + 7);
// console.log(typeof num);
// ********************************************************************

//  ===============Q2==============
// let x = 0;
// if (!x) {
//   console.log("inValid");
// }
//  ********************************************************************
//  ===============Q3==============
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log({ i });
//   }
// }
//  ********************************************************************
//  ===============Q4==============
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.filter((ele) => {
//   if (ele % 2 == 0) {
//     console.log({ ele });
//   }
// });
//  ********************************************************************
//  ===============Q5==============
// const arr1 = [1, 1, 1];
// const arr2 = [2, 2, 2];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// function mergeArrs(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// console.log(mergeArrs([1, 1, 1], [1, 2, 3]));

//  ********************************************************************

// ===============Q6==============
// let day = 2;
// switch (day) {
//   case 7:
//     console.log("saturday");
//     break;
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednsday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   default:
//     break;
// }
// ********************************************************************
//  ===============Q7==============
// let arr = ["a", "ab", "abc"];
// arr.map((ele, index, arr) => {
//   console.log(ele.length);
// });
//  ********************************************************************
//  ===============Q8==============
// function divisiability() {
//   let y = 15;

//   if (y % 3 === 0 && y % 5 === 0) {
//     return "divisible by both ";
//   }
// }
// console.log(divisiability());
//  ********************************************************************
//  ===============Q9==============
// let square = (x) => {
//   return x ** 2;
// };
// console.log(square(5));
//  ********************************************************************
//  ===============Q10==============
// const person = {
//   name: "sallam",
//   age: "23",
// };
// const distruct = Object.values(person);
// console.log(`name is ${person.name}`);

// const person2 = { name: "sallam", age: "23" };
// // const { name, age } = person2;
// function distruction({ name, age }) {
//   return `name is ${name} and age is ${age}`;
// }
// console.log(distruction(person2));

//  ********************************************************************
//  ===============Q11==============
// function sum(...param) {
//   let result = 0;
//   for (let i = 0; i < param.length; i++) {
//     result += param[i];
//   }
//   return result;
// }
// console.log(sum(5, 6, 8));

//  ********************************************************************
//  ===============Q12==============
// function createPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 3000);
//   });
// }
// createPromise().then((result) => {
//   console.log(result);
// });
//  ********************************************************************
//  ===============Q13==============

// function getBigNum(arr) {
//   result = Math.max(...arr);
//   return result;
// }
// console.log(getBigNum([1, 2, 5, 6, 4]));

//  ********************************************************************

//  ===============Q14==============
// function objKeys(x) {
//   return Object.keys(x);
// }
// let obj = { name: "sallam", age: 23 };

// console.log(objKeys(obj));

//  ********************************************************************
//  ===============Q15==============

// function splitStr(str) {
//   let result = str.split(" ");
//   return result;
// }
// console.log(splitStr("The quick brown fox"));

//  ********************************************************************
