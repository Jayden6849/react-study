import './EmotionItem.css';
import { getEmotionImage } from './../utils/getEmotionImage';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
    return (
        <div className={`emotion-item ${isSelected ? `emotion-item-on-${emotionId}`: ""}`}
            onClick={onClick}>
            <img className="emotion-img" src={ getEmotionImage(emotionId) } />
            <div className="emotion-name">{emotionName}</div>
        </div>
    );
};

export default EmotionItem;