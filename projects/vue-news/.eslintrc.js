module.exports = {
  // "Parsing error: The keyword 'import' is reserved" 오류 해결
  parserOptions: {
    parser: 'babel-eslint'
  },
  // jest 테스트 코드도 대상에 포함시키도록 함
  env: {
    jest: true
  }
};
