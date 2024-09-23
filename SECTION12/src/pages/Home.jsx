import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

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

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  };

  return (
    <div>
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