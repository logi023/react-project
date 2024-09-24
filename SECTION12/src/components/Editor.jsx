import Button from './Button';
import './Editor.css';
import EmotionItems from './EmotionItems';

const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionName: '좋음',
  },
  {
    emotionId: 3,
    emotionName: '보통',
  },
  {
    emotionId: 4,
    emotionName: '나쁨',
  },
  {
    emotionId: 5,
    emotionName: '완전 나쁨',
  },
]

const Editor = () => {

  const emotionId = 3;

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItems 
              key={item.emotionId} 
              {...item} 
              isSelected = {item.emotionId === emotionId}  // 이모션 클릭시 백그라운드 컬러
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘은 어땠나요?'></textarea>
      </section>
      <section className='button_section'>
        <Button text={"취소하기"} />
        <Button text={"작성환료"} type={"POSITIVE"} />
      </section>
    </div>
  )
}
export default Editor;