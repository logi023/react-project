import './DiaryList.css'
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if(sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    })
    // sort 메서드는 어떠한 값도 반환하지 않고 원본배열을 정렬하는 메서드 -> 원본수정시 문제발생할 수 있음.
    // toSort 메서드는 원본은 유지하고 정렬된 새로운 배열을 반환.
  }

  const sortedData = getSortedData();

  return (
    <div className='DiaryList'>
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button 
          onClick={() => nav('/new')}
          text={"새로운 일기 쓰기"} 
          type={"POSITIVE"} 
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
      </div>
    </div>
  )
}
export default DiaryList;