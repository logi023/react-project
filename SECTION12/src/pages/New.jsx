import Header from '../components/Header'
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  const { onCreateDiary } = useContext(DiaryDispatchContext); // 새로운 일기 생성하는 함수를 전달받음
  const nav = useNavigate();

  const onsubmit = (input) => {
    onCreateDiary(
      input.createdDate.getTime(), 
      input.emotionId, 
      input.content
    );
    nav('/', { replace:true })
  }

  return (
    <div>
      <Header 
        title={"새 일기 쓰기"} 
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
        }
      />
      <Editor
        onsubmit={onsubmit}
      />
    </div>
  )
}

export default New;