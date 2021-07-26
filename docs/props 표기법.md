# props 이름 표기법

```html
<div id="app">
  <app-header v-bind:propsData="message"></app-header>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  const appHeader = {
    template: '<h1>{{propsData}}</h1>',
    props: ['propsData'],
  };
  new Vue({
    el: '#app',
    components: {
      'app-header': appHeader,
    },
    data: {
      message: 'hello',
    },
  });
</script>
```

습관대로 카멜케이스(camelCase) 방식으로 props 이름을 정의했더니 console에 아래와 같은 경고성 팁을 알려줌.

```js
[Vue tip]: Prop "propsdata" is passed to component <Anonymous>, but the declared prop name is "propsData". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "props-data" instead of "propsData".
```

그래서 `propsData` 대신 `props-data`로 변경했더니 NaN 발생.
> 케밥케이스(kebab-case)

<br>

이유는 `props`, `data`를 각 props 변수 이름으로 인식해서 `-` 감산 연산이 이뤄짐.

```js
// props가 정의되지 않음
[Vue warn]: Property or method "props" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.

// data가 정의되지 않음
[Vue warn]: Property or method "data" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
```

<br>

`propsdata`와 같은 이름으로 사용하면 되지만, 스펠링체크에서 `Unknown word`가 발생하는 모습이 싫었음.  
그래서 공식 문서를 살펴보니 다음과 같은 방식을 **(강력히) 권장**하고 있었음.

```html
<div id="app">
  <app-header v-bind:props-data="message"></app-header>
</div>
...
<script>
  const appHeader = {
    template: '<h1>{{propsData}}</h1>',
    props: ['propsData'],
  };
...
```

간단히 요약하면, props를 정의할 땐 카멜케이스를 사용하고 template(html 영역), [JSX](https://vuejs.org/v2/guide/render-function.html#JSX)에서는 케밥케이스 사용.
> HTML 속성(attribute) 이름은 대소문자를 구분하지 않아서 브라우저는 대문자를 소문자로 해석한다고 함

[[공식] props 대소문자 이름, camelCase vs kebab-case](https://vuejs.org/v2/guide/components-props.html#Prop-Casing-camelCase-vs-kebab-case)  
[[공식] 스타일 가이드 - props 대소문자 이름](https://vuejs.org/v2/style-guide/#Prop-name-casing-strongly-recommended)

<br>

비로소 심신이 안정됨을 느낄 수 있었음(편안-)
