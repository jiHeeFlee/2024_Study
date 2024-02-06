let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

//Q.01 fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과','청포도'를 추가
fruits.splice(1,1,'사과','청포도');
console.log('Q.01 fruits : ',fruits);

//Q.02 fruits 배열의 첫번째 요소를 삭제
fruits = ['레몬', '토마토', '딸기', '바나나'];
fruits.splice(0,1);
console.log('Q.02 fruits : ',fruits);

//Q.03 ages 배열에 마지막 요소를 삭제해 주세요
// myCode
// ages.splice(5,1);
// console.log('Q.03 ages : ',ages);

//answerCode
ages.splice(-1,1);
console.log('Q.03 ages : ',ages);

//Q.04 ages 배열의 2번,3번 인덱스를 26,28로 변경하시오
ages= [20, 24, 25, 29, 30, 33];
ages.splice(2,2,26,28);
console.log('Q.04 ages : ',ages);

//Q. 05 numbers 배열에 1,2,3,5,8,9 를 순서대로 추가해주세요.
numbers.splice(0,0,1,2,3,5,8,9)
console.log('Q.05 numbers : ',numbers);

//Q. 06 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
for (let i = 0;i<numbers.length;i++){
    // numbers.splice(i,1);
    // i--;

    // Q.06 해설 : 배열의 요소들을 확인해서 홀수인 경우 해당 요소를 삭제해야함
    // 반복문을 통해 배열의 요소들을 하나씩 확인
    // 반복문으로 number 배열의 모든 요소를 확인하려면 아래 코드 작성
    // numbers[i]

    // 이제 조건문을 통해 이 값이 홀수인지를 확인해야함.
    // 주의할 점은 삭제할때는 index가 밀려버리기 때문에 이 부분을 조심해서 다뤄줘야함.
    // 예를 들면 number[0]이 홀수여서 제거되면, 1번 인덱스에 있던 요소가 0번 인덱스로 당겨지고, 2번 인덱스가 1번 인덱스로 당겨짐
    // 그런데 for문의 동작 부분이 수행될 때 마다 i가 증가하기 떄문에
    // 삭제될 때 만큼은 이 i가 증가되는 현상을 방지해야함.
    // so, 요소가 삭제될 때 i를 미리 한번 감소 시켜주면, 간단하게 문제 해결 가능
    if (numbers[i] % 2 !== 0){
        numbers.splice(i,1);
        i--;
    }
    console.log('for numbers : ',numbers);
}



console.log('Q.06 numbers : ',numbers);