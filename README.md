# 타입

JS  |   TS
--|--
dynamic type | static type
실제로 런타임에 돌입해야 알수있다 | 개발 중간에 문제에 대해 알수있다.


```plaintext
function add(n1,n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}

const result = add(39,28);





function add1(n1: number, n2:number){ //n1:number와 같이 type annotation을 해줘서 간편하게 사용할수있다.
    return n1 + n2;
}

const result1 = add(39,28);
```

# Primitive Type

---
```plaintext
boolean
number
string
symbol
null
undefined
 
 6가지가 있음.

리터럴 객체는 말그대로 값을 변수 그대로에 집어넣는 방식.

또는 래퍼 객체로 만들수있다.

new Boolean(false);
new String('world');
new Number(42);
------------------위와 같은 예는 객체 타입


타입 스크립트의 핵심.
모두 소문자이다.

ex)
function reverse(s:string) : string{
    return s.split("").reverse().join(""); 
}
---