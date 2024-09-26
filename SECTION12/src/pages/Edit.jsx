import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDeleteDiary, onEditDiary } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext); // 전체 데이터 불러오기
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if(!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.')
      nav('/', {replace:true})
    }

    setCurDiaryItem(currentDiaryItem)
  }, [params.id, data])

  const onClickDelete = () => {
    if(window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      //일기 삭제 로직
      onDeleteDiary(params.id);
      nav('/', {replace: true})
    }
  }

  const onsubmit = (input) => {
    if(window.confirm('일기를 정말 수정할까요?')) {
      //일기 삭제 로직
      onDeleteDiary(params.id);
      nav('/', {replace: true})
    }
    onEditDiary(
      params.id, 
      input.createdData, 
      input.emotionId, 
      input.content)
  }

  return (
    <div>
      <Header 
        title={'일기 수정하기'}
        leftChild={<Button 
          onClick={() => nav(-1)}
          text={"<뒤로 가기"} 
        />}
        rightChild={<Button 
          onClick={onClickDelete}
          text={"삭제하기"} 
          type={"NEGATIVE"} 
        />}
      />
      <Editor initData={curDiaryItem} onsubmit={onsubmit} />
    </div>
  )
}
export default Edit;