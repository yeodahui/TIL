# 2022년 05월 15일

---

## 📝오늘 배운 것

- `.preventDefault()`
- 마우스 이벤트의 좌표값들
  - `.screenX/Y`
  - `.pageX/Y`
  - `.clientX/Y`
  - `.offsetX/Y`

<br>

### preventDefault()

---

이벤트리스너가 실행되었을 때, 브라우저에서 설정되어있는 기본 이벤트 동작을 취소한다.

<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C0%29&t=zenburn&wt=bw&l=auto&width=680&ds=true&dsyoff=12px&dsblur=14px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=%253C%21--%2520submit%2520%25EC%259D%2598%2520%25EA%25B8%25B0%25EB%25B3%25B8%2520%25EB%258F%2599%25EC%259E%2591%25EC%259D%2584%2520%25EC%25A4%2591%25EC%25A7%2580%2520--%253E%250A%250Aconst%2520submit%2520%253D%2520document.querySelector%28%27.submit%27%29%253B%250A%250Asubmit.addEventListener%28%27click%27%252C%2520%28event%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520console.log%28%27clicked%27%29%253B%250A%2520%2520%2520%2520event.preventDefault%28%29%253B%250A%257D%29"
  style="width: 552px; height: 345px; border:0; transform: scale(1); overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

> - submit 버튼을 눌렀을 때 새로고침 취소
> - 우클릭 방지

브라우저의 기본 동작을 중지하고 자바스크립트를 통해 기능을 처리하고자 할때 사용.

<br>

### 마우스 이벤트의 좌표값 <br> `screen`, `client`, `page`, `offset`

---

**1. screenX, screenY**

> 사용자 **모니터 화면을 기준**으로 좌표를 반환.

모니터의 왼쪽 상단 모서리가 (0, 0)이 되며, 여러 개의 모니터를 사용할 경우 모든 모니터의 너비와 높이가 영향을 미친다.

**2. clientX, clientY**

> 브라우저에서 **웹페이지가 보여지는 영역을 기준**으로 좌표를 표시한다.

스크롤바가 움직이더라도, 특정 지점의 clientX, clientY의 값은 동일.

**3. pageX, pageY**

> 전체 **문서를 기준**으로 좌표를 반환.

문서를 표현할 때 스크롤이 생긴다면, 특정 지점의 pageY 좌표값은 페이지가 스크롤 될때마다 변경 된다.

**4. offsetX, offsetY**

> 이벤트가 걸려있는 **DOM node를 기준**으로 좌표를 표시.

참고: https://hianna.tistory.com/493 [어제 오늘 내일]
