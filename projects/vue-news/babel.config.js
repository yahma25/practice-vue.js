module.exports = {
  // presets: ['@vue/cli-plugin-babel/preset']
  // '@vue/cli-plugin-babel/preset'를 사용하지 않는다면 async/await을 사용하기 위해 추가해야 함
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
};
