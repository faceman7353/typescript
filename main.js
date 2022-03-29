// let a: number;
//let a == anotation이라고함.
//변수를 어떤 타입이라고 지정하는것을  anotation 이라고함.
// a = "Mark";
// a = 39;
// function hello(b:number){
// }
// hello(30);
//===============================================================================================================
//javascript의 타입과 typescript타입
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}
var result = add(39, 28);
function add1(n1, n2) {
    return n1 + n2;
}
var result1 = add(39, 28);
