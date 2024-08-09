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

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  }

  const addMemo = () => {
    const now = new Date().getTime();
    setMemos([
      ...memos, 
      {
        title: 'Untitled', 
        content: '', 
        createdAt: now, 
        updatedAt: now,
      }
    ])
    setSelectedMemoIndex(memos.length)
  }

  const deleteMemo = (index) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  }

  return <div className="App">
    <SideBar 
      memos={memos} 
      setSelectedMemoIndex={setSelectedMemoIndex} 
      selectedMemoIndex={selectedMemoIndex}
      addMemo={addMemo} 
      deleteMemo={deleteMemo}
    />
    <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
  </div>
}

export default App;
