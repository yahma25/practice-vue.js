module.exports = {
  transform: {
    '\\.vue$': 'vue-jest',
    '\\.[jt]sx?$': 'babel-jest', // default
  },
  testEnvironment: 'jsdom',
};
