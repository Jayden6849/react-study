import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [params, setParams] = useSearchParams();

    params.get("value");    // localhost:5173/?값 으로 접속이 가능해짐

    return (
        <div>
            홈화면
        </div>
    );
};

export default Home;