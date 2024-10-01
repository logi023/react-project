import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import { DiaryDispatchContext } from '../App';
import DiaryList from '../components/DiaryList';

import Header from "../components/Header";
import Button from '../components/Button';


const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  // Home 컴포넌트 내부에서 선언한 pivotDate 스테이트를 사용하기 때문에 increase, decrease 함수도 홈 내부에 선언해야함.
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  };
  
  return (
    <div className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={data} />
    </div>
  )
}
export default Home;