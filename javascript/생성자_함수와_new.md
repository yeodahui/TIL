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
