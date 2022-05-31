var outer = function () {
  var a = 1;

  var inner = function () {
    var b = 6;
    var c = 7;
    a = a + b + c;
    // a는 inner 함수 내부에 없으므로 외부 스코프에서 식별자 찾음

    console.log(a);
  };
  return inner;
};

var newInner = outer();
// outer의 return으로 inner 내부함수 받아옴
newInner();
// outer의 스코프는 끝났는데, inner는 여전히 a에 접근할 수 있다.
// 이미 스코프가 종료된 후에도 내부함수 inner는 a에 접근할 수 있는 권한을 가지고 있게 된다.
// 가비지컬렉터가 메모리를 감시하면서 메모리가 해제되어야 할 때를 판단하는데,
// outer 스코프의 식별자가 다른 곳에서 참조하고 있어 메모리를 해제하지 않는다.

// 이렇게 폐쇄된 공간 안에 접근하는 테크닉을 "클로저"라고 한다.

function Person() {
  let age = 15;

  return {
    getAge: function () {
      return age;
    },
    getAe: function (data) {
      age = data;
    },
  };
}

const person = Person();
console.log(person.getAge()); // 15
console.log(person.age);
person.setAge(40);
console.log(peroson.getAge());
// a에 모두 접근 가능!

// 모듈 + 사용자 정의 타입 혼합 패턴. 비공개 변수를 포함한 타입을 생성할때 사용
function PersonType2() {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2();

const person3 = new Person3();
console.log(person3.getAge());

// case.3 클로저 메모리 누수문제

function outer() {
  let privateVal = ["test"];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const private = outer();
