# React 프로젝트 생성하기

## 1. npm(Node Package Manager) 설치 확인

React는 Node 기반의 JavaScript UI 라이브러리다.

프로젝트를 생성하기에 앞서 Node.js / npm이 설치되어있는지 확인이 필요하다.

```powershell
npm -v
8.12.1
```

위 명령을 통해 Node.js와 npm의 설치 여부를 확인할 수 있다. 버전이 나오면 잘 설치된 것이고, 버전이 나오지 않는다면 Node.js를 설치해야 한다.

## 2. create-react-app

`create-react-app` 역시 node의 패키지 중 하나인데, React 프로젝트의 초기 환경을 직접 설정하지 않고 리액트 프로젝트를 시작할 수 있도록 셋팅해준다.

npx를 이용해 패키지 설치 없이 사용할 수 있다.

```powershell
npx create-react-app {생성할 프로젝트 폴더 이름}
```

예시)

```powershell
npx create-react-app my-app
```

> **npx**
>
> - **패키지를 다운받지 않고 일회성으로 사용하고 싶을 때** npm을 실행시키는 실행 도구.

프로젝트 생성에는 컴퓨터 사양에 따라 1~5분 정도 소요된다.

만약 명령이 실패할 경우, node.js의 버전이 너무 오래되진 않았는지 확인해보자.

## 3. 불필요한 파일 정리

`create-react-app`을 실행한 뒤 프로젝트 폴더의 구성은 다음과 같다.

> .
> ├── README.md
> ├── package-lock.json
> ├── package.json
> ├── node_modules
> │ ├── ...
> │ └── (설치된 모듈들)
> ├── public
> │ ├── 🗑 favicon.ico
> │ ├── index.html
> │ ├── 🗑 logo192.png
> │ ├── 🗑 logo512.png
> │ ├── 🗑 manifest.json
> │ └── 🗑 robots.txt
> └── src
> ├── 🗑 App.css
> ├── App.js
> ├── 🗑 App.test.js
> ├── 🗑 index.css
> ├── index.js
> ├── 🗑 logo.svg
> ├── 🗑 reportWebVitals.js
> └── 🗑 setupTests.js

테스트 js 파일이나 favicon 등 React 앱을 개발할 때 필요한 기초 세팅이 잘 되어있지만, 프로젝트에 따라 몇몇 파일들은 삭제해야 할 수도 있다.

특히 처음 학습할 때는 앱 실행에 지장을 주지 않는 파일들을 삭제해 디렉토리 구조를 단순화해 혼란을 줄이는 것이 도움이 된다.

> 파일명 앞에 🗑 아이콘이 붙은 학습 단계에서 삭제해도 실행에 영향을 미치지 않는 파일이다.
> src 폴더의 파일들은 App.js와 index.js가 참조하고 있다. 삭제한 파일을 참조하는 코드를 삭제해주어야 한다.

### node_modules 폴더

node.js의 패키지 구성요소 중 하나로 **외부 모듈을 저장하는 폴더**이다. react도 외부 모듈이므로 여기에 저장된다.

매우 큰 용량을 차지하므로 github나 드라이브에 프로젝트를 공유할 때는 **`.gitignore` 파일에 반드시 명시해 공유하는 파일의 용량을 줄여야 한다.** (create-react-app을 통해 생성한 프로젝트의 .gitignore에는 이미 포함되어있다.)

공유받은 프로젝트에 `node_modules` 폴더가 없을 때, `npm i`를 입력하면 자동으로 node_modules이 다운로드 된다.

### package.json 파일

package.json, package-lock.json 파일을 통해 패키지가 **어떤 설정을 갖고있는지, 어떤 패키지를 사용하고 있는 지 확인**할 수 있다.

패키지들을 연결하는 중요한 역할을 하고 있기 때문에 신중하게 수정해야 하고, 백업없이는 섣불리 삭제해서는 안된다.
