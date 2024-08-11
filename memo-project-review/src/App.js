import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import MemoContainer from './components/MemoContainer';

function App() {
  const [memoDatas, setMemoDatas] = useState([
    {
      title: '메모 no.02',
      content: '두번째 메모의 내용',
    },
    {
      title: '메모 no.01',
      content: '첫번째 메모의 내용',
    },
  ])

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const updateMemoData = (newMemo) => {
    const newMemos = [...memoDatas];
    newMemos[selectedMemoIndex] = newMemo;
    setMemoDatas(newMemos)
  }

  const addMemoItem = () => {
    setMemoDatas([
      {
        title: '제목',
        content: '',
      },
      ...memoDatas,
    ])
    setSelectedMemoIndex(0)
  }

  const deleteMemo = (index) => {
    const newMemos = [...memoDatas];
    newMemos.splice(index, 1);
    setMemoDatas(newMemos);
    if(index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  }

  return (
    <div className="App">
      <div className='memo-project'>
        <SideBar 
          memoDatas={memoDatas} 
          selectedMemoIndex={selectedMemoIndex} 
          setSelectedMemoIndex={setSelectedMemoIndex}
          onClickAdd={() => {
            addMemoItem();
          }}
          deleteMemo={deleteMemo}
        />
        <MemoContainer 
          memo={memoDatas[selectedMemoIndex]} 
          updateMemoData={updateMemoData}
        />
      </div>
    </div>
  );
}

export default App;
