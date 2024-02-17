const a = [];

console.log("a : ",a);
a.push(1);
a.push(2);
a.push(100);
console.log("a : ",a);

const lastValue=a.pop();
console.log("a : ",a);
console.log("lastValue : ",lastValue);

a.unshift(0);
a.unshift(-1);
console.log("a : ",a);

const firstValue=a.shift();
console.log("a : ",a);