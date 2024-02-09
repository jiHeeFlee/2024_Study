// splice,slice 연습

let name= [];
let age = [];

let nameChange = name.splice(0,0,'jihee','hongseo');
console.log('nameChange : ',nameChange);
console.log('name : ',name);

let ageChange=age.splice(0,0,26,25);
console.log('ageChange : ',ageChange);
console.log('age : ',age);

name , age = [];

let nameChange2 = name.slice(1);
console.log('nameChange2 : ',nameChange2);
console.log('name : ',name);