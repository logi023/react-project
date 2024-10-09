import { useContext, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime()

    const endTime = new Date(
		pivotDate.getFullYear(), 
		pivotDate.getMonth() + 1, // 다음달의
		0, // 0일 즉 이번달의 마지막날
		23,
		59,
		59
	).getTime()

    return data.filter((item) => 
        beginTime <= item.createdDate && item.createdDate <= endTime
    );
}

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyDate = getMonthlyData(pivotDate, data); 

    const onIncreaseMonth = () => {
        setPivotDate(new Date(
            pivotDate.getFullYear(),
            pivotDate.getMonth() + 1,
        ))
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(
            pivotDate.getFullYear(),
            pivotDate.getMonth() - 1,
        ))
    };

    return (
        <div className="Home">
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button 
                    onClick={onDecreaseMonth}
                    text={'<'} 
                />}
                rightChild={<Button 
                    onClick={onIncreaseMonth}
                    text={'>'} 
                />}
            />
            <DiaryList data={monthlyDate} />
        </div>
    )
}
export default Home;