import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from './DiaryItem';
import './DiaryList.css'

const DiaryList = ({ data }) => {
  const nav =  useNavigate();
  const [sortType, setSortType] = useState('latest');

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if(sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    })
  }

  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된순</option>
        </select>
        <Button
          onClick={() => nav('/new')}
          text={'새로운 일기 쓰기'}
          type={'POSITIVE'}
        />
      </div>
      <div className='list-wrap'>
        {sortedData.map((item) => {
          return (
            <DiaryItem key={item.id} {...item} />
            // {item}이 아니라 {...item}으로 전달한 이유
            // 스프레드 연산자를 사용해서 전달하면 구조분해할당을 할 수 있음.
            // <DiaryItem key={item.id} createdDate={item.createdDate} /> 이런식으로 사용할 수 있는데
            // 그냥 {item}으로 전달하면 props.item.id, props.item.createdDate 이렇게 사용해야함
          )
        })}
      </div>
    </div>
  )
}
export default DiaryList;