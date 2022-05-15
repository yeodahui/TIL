# 2022년 05월 17일

## 📝오늘 배운 것

- 이벤트 흐름 - 캡처링 이벤트, 버블링 이벤트
- 이벤트 전파(propagation)와 `.stopPropagation()`
- 객체지향 프로그래밍
- 생성자 함수와 `new`
- 프로토타입 Prototype
- `call()`
- 객체의 상속

<br>

### 이벤트 흐름 - 캡처링 이벤트, 버블링 이벤트

브라우저 화면에서 이벤트가 발생했을 때, 브라우저는 **이벤트 대상(target)** 을 찾기 시작한다. 이벤트를 찾는 흐름은 **캡처링 단계**와 **버블링 단계**, 두 가지 단계를 거친다.
<br>

**캡처링 단계**

> 캡처링 단계에서는 **캡처링 이벤트 리스너**를 실행한다.

- 브라우저가 target을 찾아갈 때는, 가장 상위의 객체인 window부터 document, body 순으로 DOM 트리를 따라 내려간다.
- Dom Tree를 위에서 아래로 탐색하다가 캡처링 이벤트 리스너를 발견하면 죄다 실행시킨다.

**버블링 단계**

> 버블링 단계에서는 **버블링 이벤트 리스너**를 실행한다.

- 캡처링 이벤트를 다 찾으면, 타겟에서 window 까지 다시 DOM Tree를 타고 올라간다.
- 그 과정 중 만나는 버블링 이벤트 리스너를 죄다 실행시킨다.

이렇게 이벤트리스너가 실행되는 것을 **이벤트를 전파**한다고 말한다.

<br>

### 이벤트 전파(propagation)와 `.stopPropagation()`

부모 요소와 자식 요소가 각각 다른 이벤트 리스너를 가지고 있을 때가 존재할 수 있다.

이 경우 자식 요소의 이벤트 리스너를 실행했을 때, 버블링 이벤트가 실행되는 단계에서 원치않게 상위 요소로 이벤트 전파가 발생하며 부모 요소의 이벤트까지 실행된다.

> `.stopPropagation()`을 사용하면, 해당 메소드가 실행된 이후의 이벤트 리스너들이 실행되지 않는다.
> (=다음 이벤트로 이벤트가 전파되지 않는다)

이벤트 흐름의 특징과 `stopPropagation` 메소드를 이용하면 원하지 않는 이벤트 리스너의 실행을 막을 수 있다.

- preventDefault()
  브라우저가 제공하는 기능을 막는 것
- stopPropagation()
  이벤트 자체가 아닌, 이벤트의 전파를 막는 것

<br>

### 객체지향 프로그래밍

> 객체지향 프로그래밍(Object-Oriented Programming)은 **여러 객체들이 서로 상호작용**하게끔 만드는 프로그래밍 방법론이다.

- "객체"란 무엇인가?
  - 객체는 키와 값, 쌍으로 이루어진 데이터 자료형이다. 우리가 표현하고자 하는 구체적인 사물을 추상적으로 표현한 것.
  - 객체는 행동(메소드)과 상태(프로퍼티)를 가진다.

### 생성자 함수와 `new`

```javascript
const me = {
  name: "사자",
  phoneNum: "010-xxxx-xxxx",
  balance: 0,
  goWork: function (hour, wage) {
    this.balance += hour * wage;
  },
};
```

위는 나에 대한 정보를 담은 객체이다. 이름과 전화번호, 잔고 등을 저장하고 있다.

만약 내가 아닌 다른 사람의 정보를 같은 형식으로 담는 객체를 만들고 싶다면 어떻게 해야 할까?

이 때 생성자 함수를 사용할 수 있다.

```javascript
// 생성자 함수 FoodBot 선언
function FoodBot(arr = []) {
  this.menu = arr;
  this.randomPick = function () {
    // 생성자 함수 FoodBot을 호출할 때 전달한 배열 중에서 하나의 요소를 골라 출력한다.
    const random = Math.floor(Math.random() * arr.length);
    alert(`오늘은 ${this.menu[random]}를 먹어볼까요?`);
  };
}

let 점심 = new FoodBot(["냉면", "볶음밥", "잔치국수"]);
let 저녁 = new FoodBot(["파스타", "샐러드", "불고기"]);

점심.randomPick();
// 냉면, 볶음밥, 잔치국수 중 하나가 출력된다.
저녁.randomPick();
// 파스타, 샐러드, 불고기 중 하나가 출력된다.
```

일반 함수에서 사용되는 this는 일반적으로 **나를 호출한 객체**를 가리킨다.

하지만 생성자 함수 안에서의 this는 생성자가 만들어낸 객체, 즉 **인스턴스**를 참조한다.

- `new`의 역할
  1. 함수에서 return을 하지 않아도 인스턴스에서 return을 발생시킴(무슨뜻❓)
  2. 생성자 함수 안의 this가 인스턴스를 바라보게 만듦

<br>

### 프로토타입 Prototype

> 프로토타입은 **객체가 공유하는 메소드**를 저장하는 공간이다.

- 생성자 함수를 이용해 커스텀 타입의 객체를 생성할 때면, 생성자 함수 내부에 메소드가 정의되어 있는 경우 생성된 각 인스턴스의 메소드는 각자 별개의 공간을 참조하게 되어 메모리를 낭비한다.
  <br>
- 이 때, 생성자 함수의 내부에서 메서드를 정의하지 않고 생성자 함수의 prototype에 메서드를 만들게 되면 **모든 인스턴스가 하나의 메서드를 공유하도록 만들어** 자원을 더 효율적으로 사용하도록 돕는다.

```javascript
// 생성자 함수 FoodBot 선언
function FoodBot(arr = []) {
  this.menu = arr;
}

// prototype을 이용한 FoodBot 생성자의 randomPick 메소드 선언
FoodBot.prototype.randomPick = function () {
  const random = Math.floor(Math.random() * arr.length);
  alert(`오늘은 ${this.menu[random]}를 먹어볼까요?`);
};
```

> **❓ prototype을 생성자 함수 내부에서도 선언할 수 있는데, 왜 바깥에서 선언할까?**
> 원래의 취지와 벗어나게 된다고 하는데... 클래스를 배우게 되면 프로토타입을 사용하는 것보다 편하게 객체를 복제할 수 있다고 한다. 천천히 알아보자

> v.10 이하 버전의 IE 브라우저에서는 Node List에 대한 forEach를 지원하지 않는다.(배열에 대한 forEach는 지원한다.) 이 경우 for of로 바꿔줄 수 있지만, `Array.prototype.forEach.call({nodeList}, i => {})` 형식을 이용하면 Array 객체가 사용하는 forEach 메소드를 빌려올 수 있어 유사배열객체에서도 forEach를 사용 할 수 있게 된다.

<br>

### 객체의 상속

부모 요소의 스타일에 자식이 영향을 받는 css처럼, 자바스크립트의 객체에서도 상속을 할 수 있다.

부모 객체의 프로퍼티를 자식이 물려받아 사용할 수 있다는 뜻.

```js
function Parent() {
  this.name = "사자";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};
```

부모 생성자 함수와 그의 메소드를 생성했다.

자식 생성자 함수가 부모 생성자의 프로퍼티와 메소드를 사용할 수 있도록 하기 위해서는, 자식 생성자 함수를 아래와 같이 작성한다.

```js
function Child() {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};
```

1. `Parent.call(this)`를 통해 프로퍼티 상속, Child가 Parent의 모든 프로퍼티에 접근할 수 있게 된다.
2. `Child.prototype = Object.create(Parent.prototype);`를 통해 프로토타입을 연결하고 메소드를 상속한다.
