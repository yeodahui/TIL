const path = require("path");
const myLoader = require("./myLoader");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      // 여기서 로더를 추가할 수 있습니다.
      {
        // 로더가 처리해야할 파일의 패턴(정규표현식)입니다.
        // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로,
        // .js$ 는 .js 로 끝나는 모든 파일을 의미합니다.
        // 원래 정규표현식에서 a.b의 의미는 a와 b를 양옆에 두는 모든 문자를 의미합니다. (ex. a123vvdb)
        test: /\.js$/,
        use: [path.resolve("./myLoader.js")],
      },
    ],
  },
};
