import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { getEmotionImage } from "../util/get-emotion-image";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();

  const itemDate = new Date(createdDate).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="DiaryItem">
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className="info_section"
      >
        <div className="created_date">{itemDate}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button 
          onClick={() => nav(`/edit/${id}`)}
          text={'수정하기'} 
        />
      </div>
    </div>
  )
}
export default DiaryItem;