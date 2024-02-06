let fruits = ['레몬','토마토','딸기','바나나'];
let ages=[20,24,25,29,30,33];
let numbers=[];

//Q.1 fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과','청포도'를 추가하시오.
let num = Array(20).fill().map((_,i)=>i)
console.log(num)

console.log('slice() 함수');
// slice() 함수
let silceNum=num.slice(5,10)
console.log('slice : ',silceNum);
console.log('num : ',num);

let numSlice=num.slice(10);
console.log('numSlice : ',numSlice);

console.log('splice() 함수');

// slice(첫번쨰 인자,두번째인자) : 첫번째 인자가 시작 인덱스 , 두번째 인자가 끝나는 인덱스.
// 배열을 복사한 뒤 인자 조건에 맞게 slice 하여 새로운 배열을 만듬

// splice() 함수
let number = Array(10).fill().map((_,i)=>i)
console.log('number 배열 : ',number);

let number02 = Array(10).fill().map((_,i)=>i)
console.log('number02 배열 : ',number02);


let Ex01 = number.splice(5,3);
console.log('splice 함수 : ',Ex01);
console.log('number : ',number);

//splice()는 원본 배열에 데이터 값을 변경하는 것!!

let Ex02 = number02.splice(5,0,-1,-2,-3);
console.log('splice함수 : ',Ex02);
console.log('number02 : ',number02);
// 두번째 인자값으로 0을 넣어서 아무것도 삭제하지 않고 인덱스 번호 5번째 에 n번째 인자들의 값을 순서대로 추가하는 것.