// TASK-1

// let names = ("ramiz,orxan,ruslan");

// let newArray = names.split(",");

// newArray.push("emin")


// newArray.shift()
// for (let i = 0; i < newArray.length; i++) {
//     let names = newArray[i];
//     console.log(names)
// }


// task-2
// function splitArray(first, second, ...rest) {
//     console.log("bir ;" + first);
//     console.log("iki ;" + second);
//     console.log("uc ;" + rest);
//   }

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   splitArray(...numbers);




// task-3

// function findMax(...args) {
//     return Math.max(...args);
//   }

//   const numbers = [1, 10, 3, 8, 5, 2, 7, 9, 4, 6];

//   const maxNumber = findMax(...numbers);

//   console.log("Maksimum deyer: " + maxNumber);

// task-4
// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];
//  for (let i = 0; i < copiedArray.length; i++) {
//     originalArray[i] = copiedArray[i] * 2

//  }
// console.log(originalArray);


// task-05
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];

//   let Develeopment = [];

//   for (let i = 0; i < employees.length; i++) {
//     if(employees[i][1] === "management"){
//         Develeopment.push(employees[i][0])
//     }

//   }
//   console.log(Develeopment);

// task-7

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// array.sort(function(a,b) {
//     return a-b;

// })

// console.log(array);



// task-08

// function findNegativeNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] < 0) {
//         console.log(numbers[i]);
//       }
//     }
//   }

//   const numbers = [-1, 2, 4, -7, -9, 12, -15];
//   findNegativeNumbers(numbers);

// task-9

// function findPossiviveNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i]>0) {
//             console.log(numbers[i]);
//         }

//     }
// }
//  const numbers = [-1, -3, 5, 4, 3, -1];
//   findPossiviveNumbers(numbers);

// // task-10

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];


// function printWithDashes(name) {
//   console.log("-------------");
//   console.log(name);
//   console.log("-------------");
// }


// function printWithHearts(name) {
//   console.log("<3<3<3<3 " + name + " <3<3<3<3");
// }

// function printWithIndex(name, index) {
//   console.log(index + " - " + name);
// }

// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);


// task-12

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let numnew = numbers.map(function(num) {
//   if (num < 0) {
//     return -num;
//   } else {
//     return num * 2;
//   }
// });

// console.log(numnew); 


// task-13
// function getFirstThreeCharacters(arr) {
//   var result = [];
  
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string' && arr[i].length >= 3) {
//       result.push(arr[i].substring(0, 3));
//     } else {
//       result.push(undefined); 
//     }
//   }

//   return result;
// }
// var metnlerMassivi = ["Alma", "Balqabaq", "Cəmir", "Dəmir", "Elmanın dala düşməsi"];
// var ilkUcSimvol = getFirstThreeCharacters(metnlerMassivi);

// console.log(ilkUcSimvol);


// task-14
// var adlar = ["Ali", "Ayşe", "Mehmet", "Aslı", "Ahmet", "Zeynep"];


// var aBaslayanlar = adlar.filter(function(ad) {
//   return ad.startsWith("A");
// });

// console.log(aBaslayanlar);

