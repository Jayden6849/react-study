import './Viewer.css';
import { getEmotionImage } from './../util/get-emotion-image'
import { emotionList } from './../util/constants';

const Viewer = ({ emotionId, content}) => {
    const emotionItem = emotionList.find(
        (item) => String(item.emotionId) === String(emotionId)
    );

    return (
        <div className="viewer">
            <section className="image-section">
                <h4>오늘의 감정</h4>
                <div className={`emotion-image-wrapper emotion-image-wrapper-${emotionId}`}>
                    <img src={ getEmotionImage(emotionId) } />
                    <div>
                        {emotionItem.emotionName}
                    </div>
                </div>
            </section>
            <section className="content-section">
                <h4>오늘의 일기</h4>
                <div className="content-wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    );
};

export default Viewer;