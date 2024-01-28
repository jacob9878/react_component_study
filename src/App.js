// 이 코드는 리액트를 불러와서 사용할 수 있게 해줌.
// 브라우저에는 모듈을 불러오는 기능은 없었음. node.js에서 지원하는 기능
import React from 'react'; 
import Hello from './component/Hello'
//import logo from './logo.svg';
import './App.css';

// App이라는 컴포넌트를 만들어준다., 이것은 html도 템플릿도 아닌 jsx라고 불림.
// 무조건 컴포넌트 함수 안에 <div>, <fragment>, <>같은 부모 태그가 있어야함.
function App() {
  return <div className='App'> 
    <Hello/>
  </div>;
}
export default App;
