// let myName:string = null;

// let u:undefined = null;


let v:void = undefined;

let union:string | null = null;  //union은 string도 null도 넣을수있는 합집합 같은 개념.

union = "Mark";


//=====================
//null in Javascript 
//null 이라는 값으로 할당된 것을null이라고 합니다.
//무언가 있는데 사용할 준바가 덜된상태
//null이라는 타입은 null이라는 값만 가질수있습니다.
//런타임에서 typeof연산자를 이용해서 알아내면, object입니다.


//========================
//undefined in Javascript 
//값을 할당하지 않은 변수는 undefined라는 값을 가집니다.
//무언가가 아예 준비가 안된 상태
//object의 property 가 없을때도 undefined입니다.
//런타임에서 typeof연산자를 이용해서 알아내면, undefined입니다.