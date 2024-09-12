import './App.css'
import { useState, useRef, useReducer } from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import List from './Components/List'
// import Exam from './Components/Exam'

// 더미데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '양치하기',
    date: new Date().getTime(),
  }
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE' : 
      return [action.data, ...state];
    case 'UPDATE' : 
      return state.map((item) => item.id === action.targetId 
        ? {...item, isDone: !item.isDone} 
        : item
      );
    case 'DELETE' : 
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}

function App() {  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data : {
        id: idRef.current ++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    // setTodos(todos.map((todo) => 
    //   todo.id === targetId
    //     ? { ...todo, isDone: !todo.isDone }
    //     : todo
    // ))
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }

  const onDelete = (targetId) => {
    // targetId가 일치하는 아이템을 todos에서 제거

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // setTodos(todos.filter((todo) => todo.id !== targetId)); // todos 전체를 순회하면서 targetId가 일치하지 않는 todo들 필터링(노출)
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }

  return (
    <div className='App'>
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
