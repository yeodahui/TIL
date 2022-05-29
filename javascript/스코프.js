var func1 = function () {
  var a = 1;
  var b = 2;
  console.log(a + b);
  // 함수 내부에서 식별자를 찾을 수 없을 때,
  // 외부 스코프가 연결되어 외부에서 찾아다님
  // = "스코프체인"이 발생
};

var a = 20;

func1();
