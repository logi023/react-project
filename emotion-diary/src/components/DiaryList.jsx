import './DiaryList.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import DiaryItem from "../components/DiaryItem";

const DiaryList = ({ data }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState('latest');

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedDate = () => {
        return data.toSorted((a, b) => {
            if(sortType === 'oldest') {
                return Number(a.createdDate) - Number(b.createdDate)
            } else {
                return Number(b.createdDate) - Number(a.createdDate)
            }
        })
    }

    const sortedDate = getSortedDate();

    return (
        <div className='DiaryList'>
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button
                    onClick={() => nav('/new')}
                    text={'새 일기 쓰기'}
                    type={'POSITIVE'}
                />
            </div>
            <div className="list_wrapper">
                {sortedDate.map((item) => 
                    <DiaryItem key={item.id} {...item} />
                )}
            </div>
        </div>
    )
}
export default DiaryList;