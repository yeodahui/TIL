var func1 = function () {
  var a = 1;
  var b = 2;

  var func2 = function () {
    var b = 5;
    var c = 6;
    a = a + b + c;
    console.log(a);
  };
  func2();
};

func1();
// 12

// func2()가 실행되면, 함수 안에서
// a를 찾을 수 없어 상위 스코프에서
// a를 찾는다.

// 함수 내부에서 외부로는 접근이 가능하다.
// 하지만 함수 외부에서 함수 내부로 접근할
// 수는 없다는 것이 함수 스코프의 특징.
