import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';

import Header from "../components/Header";
import Button from '../components/Button';

// 해당 월에 해당하는 일기만 필터링해서 보여주기
const getMonthlyData = (pivotDate, data) => {
  // 이번달의 시작과 끝 사이에 있는 애들만 필터링으로 보여주기 위해 시작지점과 끝지점을 먼저 구해야함.
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, // 1일
    0, // 0시
    0, // 0분
    0 // 0초
  ).getTime(); // getTime : 숫자값 형식으로

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1, // 다음달의
    0, // 0일로 하면 그전달의 마지막날이 됨
    23, // 23시
    59, // 59분
    59 // 59초
  ).getTime();

  return data.filter(
    (item) => 
      beginTime <= item.createdDate && item.createdDate <= endTime
  );
}

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

  const monthlyData = getMonthlyData(pivotDate, data)
  
  return (
    <div className="Home">
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  )
}
export default Home;