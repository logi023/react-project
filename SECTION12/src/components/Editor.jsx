import './Editor.css';
import EmotionItems from './EmotionItems';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get-sringed-date';

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  useEffect(() => {
    if(initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate))
      })
    }
  }, [initData])

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const onChangeInput = (e) => {
    // console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    // console.log(e.target.value); // 입력된 값이 무엇인지

    // e.target.value가 문자열로 들어오기 때문에 데이트객체로 변경하기 위해 아래 과정을 거쳐야함..

    let name = e.target.name;
    let value = e.target.value;
    if(name === 'createdDate') {
      value = new Date(value);
    }
    
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input)
  }

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input 
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)} 
          type="date" 
        />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItems 
              onClick={() => onChangeInput({
                target: {
                  name: 'emotionId',
                  value: item.emotionId,
                }
              })}
              key={item.emotionId} 
              {...item} 
              isSelected = {item.emotionId === input.emotionId}  // 이모션 클릭시 백그라운드 컬러
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea 
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder='오늘은 어땠나요?'
        ></textarea>
      </section>
      <section className='button_section'>
        <Button 
          onClick={() => nav(-1)}
          text={"취소하기"} 
        />
        <Button 
          onClick={onClickSubmitButton}
          text={"작성완료"} type={"POSITIVE"} 
        />
      </section>
    </div>
  )
}
export default Editor;