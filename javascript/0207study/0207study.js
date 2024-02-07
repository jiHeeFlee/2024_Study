// 배열의 메소드 Array's Method
let members = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
console.log('members : ',members);

// 배열의 첫 요소를 삭제 : shift()
members.shift();
console.log('members.shift() : ',members);

// 배열의 마지막 요소를 삭제 : pop()
members = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
members.pop();
console.log('members.pop() : ',members);

// 배열의 첫 요소로 값 추가 : unshift(value);
members = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
members.unshift('NiceCodeit');
console.log('members.unshift : ',members);

// 배열의 마지막 요소로 값 추가 : push(value);
members = ['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];
members.push('HiCodeit!');
console.log('members.push : ',members);

// Q. 다음 코드의 결과로 올바른 것은?
function range(start,count,step){
    let arr = [];

    for (let i = 0; i< count; i++){
        arr.push(start + i * step)
    }

    return arr;
}

console.log(range(1,10,3));
