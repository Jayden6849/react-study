import './DiaryItem.css';
import { useNavigate } from 'react-router-dom';
import { getEmotionImage } from "../utils/getEmotionImage";
import Button from './Button';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
    const nav = useNavigate();

    return (
        <div className="diary-item">
            <div className={`img-section img-section-${emotionId}`}
                onClick={() => {nav(`/diary/${id}`)}}>
                <img src={getEmotionImage(emotionId)} />
            </div>
            <div className="info-section"
                onClick={() => {nav(`/diary/${id}`)}}>
                <div className="created-date">{new Date(createdDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </div>
            <div className="btn-section">
                <Button text="수정하기" 
                    onClick={() => {nav(`/edit/${id}`)}}/>
            </div>
        </div>
    );
};

export default DiaryItem;