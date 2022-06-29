# Entry와 Output 그리고 mode

> entry, output, mode 세 가지 옵션은 번들링 시 필수로 설정해야 한다.

```Bash
npx webpack --mode development
npx webpack --entry {모듈이 import되는 javascript 진입점}
npx webpack -o {번들 처리된 파일이 생성될 곳}
# 축약: npx webpack --mode development --entry ./src/app.js -o ./dist
```

위 명령을 통해 entry, output, mode 옵션을 설정해줄 수 있다.

명령문을 매번 작성하기는 번거로우므로, 웹팩 설정 파일 webpack.config.js 파일을 작성하고 package.json을 수정해주는 방식으로도 설정이 가능하다.

[webpack.config.js](./webpack.config.js)

```js
// webpack.config.js

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
};
```

```json
// package.json
{
  ...
  "build": "webpack"
  ...
}
```

이렇게 코드를 수정하고 npm run build 를 실행하면 npm 이 자동으로 webpack의 webpack.config.js 파일을 참고하여 코드를 실행시킨다.
