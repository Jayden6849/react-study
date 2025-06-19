import { useState, useContext } from 'react';
import { DiaryStateContext } from './../App';

import Header from './../components/Header';
import Button from './../components/Button';

const getMonthlyData = (pivotDate, data) => {
    const beginDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();
    return data.filter((item) => beginDate <= item.createdDate && item.createdDate <= endDate);
};


const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);
    const monthlyData = getMonthlyData(pivotDate, data);

    const onClickPrevMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };
    const onClickNextMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };

    return (
        <div className="home">
            <Header leftChild={<Button text={"<"} onClick={onClickPrevMonth} />}
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                rightChild={<Button text={">"} onClick={onClickNextMonth} />} />
        </div>
    );
};

export default Home;