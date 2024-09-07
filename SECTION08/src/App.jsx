import './App.css'
import { useState, useRef } from 'react'
import Header from './Components/Header'
import Editor from './Components/Editor'
import List from './Components/List'

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

function App() {  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([
      newTodo,
      ...todos
    ])
  }

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </>
  )
}

export default App
