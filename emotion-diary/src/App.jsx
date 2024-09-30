import './App.css';
// useReducer : useState와 마찬가지로 상태관리 리액트 훅. useState와 달리 상태를 컴포넌트 외부로 분리할 수 있음.
import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getEmotionImage } from './util/get-emotion-image';

import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

function reducer(state, action) {
  return state;
}

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
]

function App() {
  // data를 여러 페이지로 보낼때 프롭스로 복잡하게 주고받는 상황 방지하기 위해 useReducer 사용.
  // const [상태명, dispatch] = useReducer(dispatch를 확인해서 state를 변경해주는 함수, 초기값)
  const [data, dispatch] = useReducer(reducer, mockData);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
