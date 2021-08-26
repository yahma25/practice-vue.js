module.exports = {
  // package.json에 설치한 eslint에 추가 설정
  overrides: {
    // jest 테스트 코드도 대상에 포함시키도록 함
    env: {
      jest: true
    }
  }
};
