import './App.css';
// useReducer : useState와 마찬가지로 상태관리 리액트 훅. useState와 달리 상태를 컴포넌트 외부로 분리할 수 있음.
import { useReducer, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getEmotionImage } from './util/get-emotion-image';

import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Edit from "./pages/Edit"
import Notfound from "./pages/Notfound"

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : 
      return [action.data, ...state];
  }
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
  const idRef = useRef(3);

  // ******************* 기능구현 ******************* //

  const onCreateDiary = (createdDate, emotionId, content) => {
    // 새로운 일기 추가
    // dispatch 내부에는 상태가 어떻게 변화되길 원하는지 기입한다.
    dispatch({
      type: 'CREATE', // CREATE인 경우에는
      data: {
        id: idRef.current ++, // 현재 idRef에서 +1
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onEditDiary = () => {
    // 기존 일기 수정
  }

  const onDeleteDiary = () => {
    // 기존 일기 삭제
  }

  return (
    <>

      <button
        onClick={() => {
          onCreateDiary(new Date().getTime(), 1, "Hello");
        }}
      >
        일기 추가 테스트
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
