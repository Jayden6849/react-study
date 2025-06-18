import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
    return (
        <div className="DiaryList">
            <div className="menuBar">
                <select>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div className="listWrapper">
                <DiaryItem />
            </div>
        </div>
    );
};

export default DiaryList;