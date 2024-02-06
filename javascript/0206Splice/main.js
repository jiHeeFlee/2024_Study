let fruits = ['레몬','토마토','딸기','바나나'];
let ages=[20,24,25,29,30,33];
let numbers=[];

//Q.1 fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과','청포도'를 추가하시오.
let num = Array(20).fill().map((_,i)=>i)
console.log(num)

let silceNum=num.slice(5,10)
console.log('slice : ',silceNum);
console.log('num : ',num);

let numSlice=num.slice(10);
console.log('numSlice : ',numSlice);

// slice(첫번쨰 인자,두번째인자) : 첫번째 인자가 시작 인덱스 , 두번째 인자가 끝나는 인덱스.
// 배열을 복사한 뒤 인자 조건에 맞게 slice 하여 새로운 배열을 만듬