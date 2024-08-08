import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1723128401760, // 시간값
      updatedAt: 1723128401760, // 시간값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1723128463148, // 시간값
      updatedAt: 1723128463148, // 시간값
    },
  ]);

  return <div className="App">
    <SideBar memos={memos} />
    <MemoContainer />
  </div>
}

export default App;
