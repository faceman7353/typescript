"use strict";
// let myName:string = "Mark";
// myName = 'Anne';
//자바스크립트가 발전하면서 string을 +로 연결하는것이 현재는 ``(백틱기호) 안에서 붙여사용할수있다.
// ``(백틱기호) 안에서는 줄바꿈처리도 사용하는그대로 표현됨.
let fullName = "Mark Lee";
let age = 30;
let sentence = `Hello, My name is ${fullName}.

'll be ${age + 1} years old next month`;
console.log(sentence);
//코드를 작성후 컴파일 하려면
// npx tsc
//node 파일이름.js 
//하면 만든 파일내용 출력
