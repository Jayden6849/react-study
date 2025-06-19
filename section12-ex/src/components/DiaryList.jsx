import './DiaryList.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';
import Button from './Button';

const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if(sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    };

    const sortedData = getSortedData();

    return (
        <div className="diary-list">
            <div className="menu-bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"새로운 일기 추가"}
                    type="POSITIVE"
                    onClick={() => {nav(`/new`)}}/>
            </div>
            <div className="list-wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} /> )}
            </div>
        </div>
    );
};

export default DiaryList;